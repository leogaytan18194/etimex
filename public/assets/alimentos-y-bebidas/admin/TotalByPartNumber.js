import React, { useContext, useState, useEffect } from "react";
import { Table } from "../../styles/Styles";
import { MainContext } from "../../context/MainContext";
import { getReportsByPartNumber } from "../../api/daryan.api";
import TaLoader from "./TaLoader";

const TotalByPartNumber = () => {
  const { rDetailsData, partNumber, token } = useContext(MainContext);

  const [total_inspected, setTotalInspected] = useState([]);
  const [showDetails, setShowDetails] = useState(false); // Nuevo estado para el toggle
  const [columnTitles, setColumnTitles] = useState([]); // Nuevo estado para los títulos de las columnas
  const [tableData, setTableData] = useState([]);
  const [originalTableData, setOriginalTableData] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const getAllDetails = async (partNumber, type) => {
    setShowDetails(!showDetails);

    if (showDetails === true) return;
    setIsLoading(true); // Comienza la carga
    await getReportsByPartNumber({ partNumber, token })
      .then((res) => {
        const data = res.data;

        setColumnTitles(data.column_names);
        setTableData(data.column_values);
        setOriginalTableData(data.column_values); // Aquí se establecen los datos originales
      })
      .catch((err) => {
        console.log(err);
      });

    // const response = await fetch("https://api.example.com/data");
    // const data = await response.json();

    setIsLoading(false); // Termina la carga
  };

  useEffect(() => {
    // Sum the values of the object array
    const total_inspected = rDetailsData.reduce(
      (a, b) => a + (b["total_inspected"] || 0),
      0
    );
    const total_ng_pieces = rDetailsData.reduce(
      (a, b) => a + (b["total_ng_pieces"] || 0),
      0
    );
    const total_ok_pieces = rDetailsData.reduce(
      (a, b) => a + (b["total_ok_pieces"] || 0),
      0
    );
    const total_re_work_parts = rDetailsData.reduce(
      (a, b) => a + (b["total_re_work_parts"] || 0),
      0
    );
    const total_scrap = rDetailsData.reduce(
      (a, b) => a + (b["total_scrap"] || 0),
      0
    );
    const total_worked_h = rDetailsData.reduce(
      (a, b) => a + (b["worked_h"] || 0),
      0
    );
    setTotalInspected([
      total_inspected,
      total_ng_pieces,
      total_ok_pieces,
      total_re_work_parts,
      total_scrap,
      total_worked_h,
      <>
        <i
          className="fas fa-eye"
          style={{
            fontSize: "1.5rem",
            cursor: "pointer",
            color: "green",
          }}
          onClick={(e) => getAllDetails(partNumber)}
        />
      </>,
    ]);
    //console.log(total_inspected);
    return () => {
      //console.log("cleanup");
    };
  }, [rDetailsData, showDetails]);

  // const getDetails = (type) => {
  //   const filteredData = originalTableData.filter(
  //     (t) => Number(t.type) === type
  //   );

  //   const groupedData = filteredData.reduce((acc, item) => {
  //     // Si el report_id no existe en el objeto acumulador, inicialízalo con un objeto vacío.
  //     if (!acc[item.report_id]) {
  //       acc[item.report_id] = {
  //         report_id: item.report_id,
  //       };
  //     }

  //     // Añade la cláusula y la cantidad al objeto del report_id correspondiente.
  //     acc[item.report_id][item.clause] = item.cant;

  //     return acc;
  //   }, {});

  //   setTableData(Object.values(groupedData));
  // };
  const getDetails = (type) => {
    const filteredData = originalTableData.filter(
      (t) => Number(t.type) === type
    );

    const groupedData = filteredData.reduce((acc, item) => {
      // Si el report_id no existe en el objeto acumulador, inicialízalo con un objeto vacío.
      if (!acc[item.report_id]) {
        acc[item.report_id] = {
          report_id: item.report_id,
        };
      }

      // Si la cláusula ya existe en el objeto del report_id correspondiente, súmale la cantidad.
      // De lo contrario, inicialízalo con la cantidad del item.
      if (acc[item.report_id][item.clause]) {
        acc[item.report_id][item.clause] += parseInt(item.total_cant);
      } else {
        acc[item.report_id][item.clause] = parseInt(item.total_cant);
      }

      // Añade la propiedad incident.
      acc[item.report_id]["incident"] = item.incident;

      return acc;
    }, {});

    setTableData(Object.values(filteredData));
    console.log(filteredData);
  };

  const [tooltip, setTooltip] = useState({
    x: 0,
    y: 0,
    show: false,
    text: "",
  });
  const handleCellClick = (e, text) => {
    console.log("Clicked text:", text); // Agrega esta línea
    const rect = e.target.getBoundingClientRect();
    setTooltip({
      x: rect.x,
      y: rect.y,
      show: true,
      text: text,
    });
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.className.includes("table-center")) {
        setTooltip({ ...tooltip, show: false });
      }
    };
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [tooltip]);

  // definir estilos como objeto JavaScript
  const tableStyle = {
    maxHeight: "200px",
    overflowY: "auto",
    display: "block",
    maxWidth: "590px",
    margin: "0 auto",
  };
  const tableContainerStyle = {
    maxHeight: "200px",
    overflowY: "auto",
  };
  return (
    <div className="modal-details">
      <div className="modal-details-content">
        <div className="modal-details-header">
          <h2>Numero de parte:</h2>
          <h3>{partNumber}</h3>
        </div>
        <div className="modal-details-body">
          <Table>
            <table className="table-details">
              <thead>
                <tr>
                  <th>Total Inspeccionado</th>
                  <th>Total NG Piezas</th>
                  <th>Total OK Piezas</th>
                  <th>Total Retrabajadas</th>
                  <th>Total Scrap</th>
                  <th>Total Horas Trabajadas</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  {total_inspected.map((item, index) => {
                    return (
                      <td key={index} className="table-center">
                        {index >= 1 && index <= 4 ? (
                          <>
                            {index !== 2 ? (
                              <span
                                onClick={() =>
                                  getDetails(index !== 1 ? index - 1 : index)
                                }
                              >
                                {item}
                              </span>
                            ) : (
                              item
                            )}
                          </>
                        ) : (
                          item
                        )}
                      </td>
                    );
                  })}
                </tr>
                {showDetails === true && (
                  <tr>
                    <td colSpan="7">
                      <div style={tableContainerStyle}>
                        <table>
                          <thead>
                            <tr>
                              {tableData[0] &&
                                Object.keys(tableData[0])
                                  .filter(
                                    (key) =>
                                      key !== "incident" && key !== "type"
                                  ) // Filtrar las claves que no sean "incident" ni "anotherKey"
                                  .map((key, index) => (
                                    <th key={index}>{key === "clause" ? "inciso": key}</th>
                                  ))}
                            </tr>
                          </thead>

                          <tbody>
                            {isLoading ? (
                              <TaLoader colspan={4} />
                            ) : (
                              tableData.map((row, index) => (
                                <tr key={index}>
                                {Object.entries(row)
                                  .filter(([key]) => key !== "incident" && key !== "type") // Filtrar las entradas cuya clave no sea "incident" ni "anotherKey"
                                  .map(([key, value], cellIndex) => (
                                    <td
                                      key={cellIndex}
                                      className="table-center"
                                      onClick={(e) => handleCellClick(e, row.incident)}
                                    >
                                      {key === "type" ? (
                                        <>
                                          {Number(value) === 1 && "NG"}
                                          {Number(value) === 2 && "RT"}
                                          {Number(value) === 3 && "SC"}
                                        </>
                                      ) : (
                                        value
                                      )}
                                    </td>
                                  ))}
                              </tr>
                              
                              ))
                            )}
                          </tbody>

                          {tooltip.show && (
                            <div
                              style={{
                                position: "fixed",
                                left: tooltip.x,
                                top: tooltip.y,
                                backgroundColor: "white",
                                border: "1px solid black",
                                padding: "5px",
                                zIndex: 100,
                              }}
                            >
                              {tooltip.text}
                            </div>
                          )}
                        </table>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default TotalByPartNumber;
