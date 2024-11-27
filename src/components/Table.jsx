import React from "react";
import Styles from "../components/Table.module.css";

export const Table = ({ data }) => {
  return (
    <div>
      <div className={`container p-0 rounded-2 ${Styles.TableContainer}`} style={{overflow:"hidden", border: "2px solid #E9296A"}}>
        {data.map((item, index) => (
          <div key={index} className={`row ${Styles.Row}`}>
            <div
              className={`col-3 p-3 ${Styles.TableCol}`}
              style={
                item.id === 0
                  ? { backgroundColor: "#E9296A", border: "1px solid #E9296A" }
                  : { border: "1px solid #E9296A", backgroundColor:"#F6F6F6" }
              }
            >
              <p
                className={`text-start ps-3 ${Styles.ColCont}`} // Changed to 'text-start'
                style={
                  item.id === 0
                    ? {
                        fontWeight: "bold",
                        color: "white",
                        backgroundColor: "#E9296A",
                      }
                    : { fontWeight: "bold" }
                }
              >
                {item.TableCol1}
              </p>
            </div>
            <div
              className={`col-3 p-3 ${Styles.TableCol}`}
              style={
                item.id === 0
                  ? { backgroundColor: "#E9296A", border: "1px solid #E9296A" }
                  : { border: "1px solid #E9296A", backgroundColor:"#F6F6F6"  }
              }
            >
              <p
                className={`text-center ${Styles.ColCont}`}
                style={
                  item.id === 0
                    ? {
                        fontWeight: "bold",
                        color: "white",
                        backgroundColor: "#E9296A",
                      }
                    : {}
                }
              >
                {item.TableCol2}
              </p>
            </div>
            <div
              className={`col-3 p-3 ${Styles.TableCol}`}
              style={
                item.id === 0
                  ? { backgroundColor: "#E9296A", border: "1px solid #E9296A" }
                  : { border: "1px solid #E9296A", backgroundColor:"#F6F6F6"  }
              }
            >
              <p
                className={`text-center ${Styles.ColCont}`}
                style={
                  item.id === 0
                    ? {
                        fontWeight: "bold",
                        color: "white",
                        backgroundColor: "#E9296A",
                      }
                    : {}
                }
              >
                {item.TableCol3}
              </p>
            </div>
            <div
              className={`col-3 p-3 ${Styles.TableCol}`}
              style={
                item.id === 0
                  ? { backgroundColor: "#E9296A", border: "1px solid #E9296A" }
                  : { border: "1px solid #E9296A", backgroundColor:"#F6F6F6"  }
              }
            >
              <p
                className={`text-center ${Styles.ColCont}`}
                style={
                  item.id === 0
                    ? {
                        fontWeight: "bold",
                        color: "white",
                        backgroundColor: "#E9296A",
                      }
                    : {}
                }
              >
                {item.TableCol4}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
