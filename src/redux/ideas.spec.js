import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';

import {
  getIdeas,
  getIdeasRequest,
  handleIdeasSaga,
  IDEAS_URI
} from './ideas';

describe('Given handleIdeasSaga', () => {
  describe('when it is called', () => {
    it('should takeEvery getIdeas.REQUEST', () => {
      const handleIdeasSagaTest = handleIdeasSaga();

      expect(handleIdeasSagaTest.next().value).toEqual(
        takeEvery(getIdeas.REQUEST, getIdeasRequest)
      );
    });
  });
});

describe('Given getIdeasRequest', () => {
  describe('when it is called', () => {
    let getIdeasRequestTest;

    beforeEach(() => {
      getIdeasRequestTest = getIdeasRequest();
    });

    it('should call axios.get with the correct params', () => {
      expect(getIdeasRequestTest.next().value).toEqual(
        call(axios.get, IDEAS_URI)
      );
    });

    it('should put a success action', () => {
      const data = { ideas: [{ id: 'hello', 'created_date': 'today', title: 'yeah', body: 'ok' }]};
      const putData = { ideas: [{ id: 'hello', 'createdDate': 'today', 'created_date': 'today', title: 'yeah', body: 'ok' }]};

      getIdeasRequestTest.next();

      expect(getIdeasRequestTest.next({ data }).value).toEqual(
        put(getIdeas.success(putData))
      );
    });

    describe('and there is an error', () => {
      it('should put a success action', () => {
        const error = 'here be errors';

        getIdeasRequestTest.next();

        expect(getIdeasRequestTest.throw(error).value).toEqual(
          put(getIdeas.failure(error))
        );
      });
    });
  });
});
