import axios from 'axios';
import { createAction } from 'redux-saga-actions';
import { call, put, takeEvery } from 'redux-saga/effects';

export const IDEAS_URI = 'http://localhost:8000/ideas';
export const IDEA_URI = 'http://localhost:8000/idea';
export const NEW_IDEA_URI = `${IDEAS_URI}/new`;
export const UPDATE_IDEA_URI = `${IDEA_URI}/update`;
export const DELETE_IDEA_URI = `${IDEA_URI}/delete`;

const defaultState = {
  ideas: []
};

export const getIdeas = createAction('GET_IDEAS');
export const newIdea = createAction('NEW_IDEA');
export const deleteIdea = createAction('DELETE_IDEA');
export const updateIdea = createAction('UPDATE_IDEA');
export const editIdea = createAction('EDIT_IDEA');
export const finishedEditing = createAction('FINISHED_EDITING');

export const ideasReducer = (state = defaultState, action) => {
  switch(action.type) {
    case getIdeas.SUCCESS:
      return { ...state, ...action.payload };
    case newIdea.SUCCESS:
      return {
        ...state,
        ideas: [
          ...state.ideas,
          { ...action.payload, isEditing: true }
        ]
      };
    case updateIdea.REQUEST:
      let ideas = state.ideas.map((currentIdea) => {
        if (currentIdea.id === action.payload.id) {
          return {
            ...currentIdea,
            ...action.payload
          };
        }

        return currentIdea;
      });

      return { ...state, ideas };
    case editIdea.REQUEST:
      ideas = state.ideas.map((currentIdea) => {
        if (currentIdea.id === action.payload) {
          return {
            ...currentIdea,
            isEditing: true
          };
        }

        return currentIdea;
      });

      return { ...state, ideas };
    case deleteIdea.REQUEST:
      ideas = state.ideas.filter(idea => {
        if(idea.id !== action.payload) {
          return idea;
        }

        return false;
      });

      return {
        ...state,
        ideas
      };
    case finishedEditing.REQUEST:
      ideas = state.ideas.map((idea) => ({
        ...idea,
        isEditing: false
      }));

      return {
        ...state, ideas
      };

    default:
      return state;
  }
}
const camelcaseIdea = (idea) => ({
  ...idea,
  createdDate: idea['created_date']
});

const normalizeIdeas = (ideas) => {
  return ideas.map(idea => camelcaseIdea(idea));
}

export function* getIdeasRequest() {
  try {
    const { data } = yield call(axios.get, IDEAS_URI);

    yield put(getIdeas.success({ ideas: normalizeIdeas(data.ideas) }));
  } catch(error) {
    yield put(getIdeas.failure(error));
  }
}

export function* newIdeaRequest() {
  try {
    const { data } = yield call(axios.get, NEW_IDEA_URI);

    yield put(newIdea.success(camelcaseIdea(data)));
  } catch(error) {
    yield put(newIdea.failure(error));
  }
}

export function* updateIdeaRequest() {
  try {
    yield call(axios.post, UPDATE_IDEA_URI);

    yield put(updateIdea.success());
  } catch(error) {
    yield put(updateIdea.failure(error));
  }
}

export function* deleteIdeaRequest() {
  try {
    yield call(axios.post, DELETE_IDEA_URI);

    yield put(deleteIdea.success());
  } catch(error) {
    yield put(deleteIdea.failure(error));
  }
}

export function* handleIdeasSaga() {
  yield takeEvery(getIdeas.REQUEST, getIdeasRequest);
  yield takeEvery(newIdea.REQUEST, newIdeaRequest);
  yield takeEvery(updateIdea.REQUEST, updateIdeaRequest);
  yield takeEvery(deleteIdea.REQUEST, deleteIdeaRequest);
}
