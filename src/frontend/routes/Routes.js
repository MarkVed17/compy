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
} from "../screens";
import Mockman from "mockman-js";
import { PrivateRoute } from "../components";
import { useAuth } from "../contexts";

const Router = () => {
  const { auth } = useAuth();
  
  return (
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
      {!auth.status && (
        <>
          <Route path="/signin" element={<SignInScreen />} />
          <Route path="/signup" element={<SignUpScreen />} />
        </>
      )}
      <Route path="/mockman" element={<Mockman />} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
};

export { Router };
