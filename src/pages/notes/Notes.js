import React from "react";
import { CiBookmarkCheck } from "react-icons/ci";
import { FcStart, FcDownload } from "react-icons/fc";
import Layout from "../../components/layout/Layout";
import style from "../../style/notes/note.module.css";
import notes from "../../data/notes/notes.json";
import { Link } from "react-router-dom";

const Notes = () => {
  return (
    <Layout>
      <h2 className={style.note_head}>BE MECHANICAL STUDY MATERIALS</h2>
      {notes.map((current) => {
        const note = current.year;
        return (
          <div className={style.semeter_St} key={current.id}>
            {note.map((data) => {
              return (
                <div className={style.note_main} key={data.id}>
                  <h3>{data.sem}</h3>

                  <div className={style.notes_subj}>
                    {data.Subjects.map((sub) => {
                      return (
                        <div
                    
                          key={sub.id}
                          className={`card shadow-lg p-3 bg-body mb-5 fade-in-left ${style.subjects}` }
                          style={{ width: "18rem", height: "11rem" }}
                        >
                          <div className="card-header text-bold ">
                           
                            <CiBookmarkCheck /> {sub.name}
                          </div>
                          <div className="card-body">
                            <h5 className="card-title"> Follow Links </h5>
                            <div className="d-flex text-white bg-body my-3 justify-content-around ">
                              <Link to={sub.youtube} target="_blank">
                                <FcStart />
                              </Link>
                              <Link to={sub.drive} target="_blank">
                                <FcDownload />
                              </Link>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </Layout>
  );
};

export default Notes;
