import React, { useEffect, useRef, useState } from "react";
import styles from "./Profile.module.css";
import { BiMath } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import Message from "../components/Message";
import { Link, useParams } from "react-router-dom";
import { getProfile } from "../slices/teacher-slice";
import { FaEarthAmericas } from "react-icons/fa6";
import IconMathComponent from "../components/icons/IconMathComponent";
import IconGeoComponent from "../components/icons/IconGeoComponent ";
import IconGrammarComponent from "../components/icons/IconGrammarComponent";
import IconHistoryComponent from "../components/icons/IconHistoryComponent";

const Profile = () => {
  const dispatch = useDispatch();
  const { teacher, loading } = useSelector((state) => state.teacher);
  const fillIcon = (sub) => {
    switch (sub) {
      case "Matemática":
        return <IconMathComponent />;

      case "Geografia":
        return <IconGeoComponent />;

      case "Gramática":
        return <IconGrammarComponent />;

      case "História":
        return <IconHistoryComponent />;
    }
  };

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <div id={styles.profile}>
      <div className={styles.profile_header}>
        <h2>{teacher.name}</h2>
        <div className={styles.profile_description}>
          <div className={styles.profile_field}>
            <h3>Seu email:</h3>
            <p>{teacher.email}</p>
          </div>
          <div className={styles.profile_field}>
            <h3>Sua disciplina:</h3>
            <p className={styles.icon_subjec}>
              {teacher.subject} <span>{fillIcon(teacher.subject)}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
