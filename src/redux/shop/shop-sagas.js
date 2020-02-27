import { takeEvery, call, put } from "redux-saga/effects";
import * as actionTypes from "../actionTypes";

import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure
} from "./shop-action";

import {
  firestore,
  convertCollectionsSnapshopToMap
} from "./../../firebase/firebase.utils";

export function* fetchCollectionsAsync() {
  yield console.log("I am fired");
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshopToMap,
      snapshot
    );
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
  // collectionRef
  //   .get()
  //   .then(snapshot => {
  //     const collectionsMap = convertCollectionsSnapshopToMap(snapshot);

  //     dispatch(fetchCollectionsSuccess(collectionsMap));
  //   })
  //   .catch(err => fetchCollectionsFailure(err.message));
}

export function* fetchCollectionStart() {
  yield takeEvery(actionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}
