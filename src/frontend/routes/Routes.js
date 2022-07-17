import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import {
  HomeScreen,
  ArchivesScreen,
  NotesScreen,
  LabelsScreen,
  TrashScreen,
  SignInScreen,
  SignUpScreen,
  SearchScreen,
} from "../screens";
import Mockman from "mockman-js";
import { PrivateRoute, ScrollToTop } from "../components";
import { useAuth } from "../contexts";

const Router = () => {
  const { auth } = useAuth();

  return (
    <ScrollToTop>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route
          path="/archives"
          element={
            <PrivateRoute>
              <ArchivesScreen />
            </PrivateRoute>
          }
        />
        <Route
          path="/notes"
          element={
            <PrivateRoute>
              <NotesScreen />
            </PrivateRoute>
          }
        />
        <Route
          path="/labels"
          element={
            <PrivateRoute>
              <LabelsScreen />
            </PrivateRoute>
          }
        />
        <Route
          path="trash"
          element={
            <PrivateRoute>
              <TrashScreen />
            </PrivateRoute>
          }
        />
        <Route
          path="search"
          element={
            <PrivateRoute>
              <SearchScreen />
            </PrivateRoute>
          }
        />
        {!auth.status && (
          <>
            <Route path="/signin" element={<SignInScreen />} />
            <Route path="/signup" element={<SignUpScreen />} />
          </>
        )}
        <Route path="/mockman" element={<Mockman />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </ScrollToTop>
  );
};

export { Router };
