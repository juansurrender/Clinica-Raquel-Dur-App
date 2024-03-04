import React, { useEffect, useState } from "react";
import "./OverviewMonth.css";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonFab,
  IonFabButton,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
  IonActionSheet,
  IonButtons,
  IonMenuButton,
} from "@ionic/react";
import Mimenu from "../components/menu";
import axios from "axios";

function generateCalendar(year: any, month: any) {
  const monthNames = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  return `${monthNames[month]} ${year}`;
}

function CalendarComponent() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());

  const prevMonth = () => {
    setCurrentMonth((prevMonth) => {
      if (prevMonth === 0) {
        setCurrentYear((year) => year - 1); // Si es enero, restar 1 al año
        return 11; // cambiar a diciembre
      } else {
        return prevMonth - 1; //cambiar al mes anterior
      }
    });
  };
  const nextMonth = () => {
    setCurrentMonth((nextMonth) => {
      if (nextMonth === 11) {
        setCurrentYear((year) => year + 1); // Si es diciembre, sumar 1 al año
        return 0; //cambiar a enero
      } else {
        return nextMonth + 1; // cambiar al mes siguiente
      }
    });
    // Implementación de la función nextMonth
  };

  async function obtenerDiasOcupados(
    currentYear: number,
    currentMonth: number
  ) {
    const diasOcupadosAxios = await axios.get(
      `http://localhost:1489/citasocupadasmes/${currentYear}/${currentMonth}`
    );
    return diasOcupadosAxios.data;
  }

  async function obtenerDiasDeCitasDelUsuario() {}

  async function dibujarCalendario(currentYear: number, currentMonth: number) {
    const diasOcupados = await obtenerDiasOcupados(
      currentYear,
      currentMonth + 1
    );
    const diasOcupadosArrayNumerico = diasOcupados.map(
      (diaOcupado: any) => diaOcupado.dia
    );
    console.log(diasOcupadosArrayNumerico);
    const calendarDiv = document.getElementById("calendar");
    if (calendarDiv) {
      // Limpiar el contenido previo del calendario
      calendarDiv.innerHTML = "";

      // Obtener el primer día del mes
      const firstDayOfMonth = new Date(currentYear, currentMonth, 1);

      const startingDay = firstDayOfMonth.getDay();

      // Crear una tabla para el calendario
      const table = document.createElement("table");

      // Crear el encabezado de la tabla con los días de la semana
      const headerRow = document.createElement("tr");
      ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"].forEach((day) => {
        const th = document.createElement("th");
        th.textContent = day;
        headerRow.appendChild(th);
      });
      table.appendChild(headerRow);

      // Crear las filas y celdas para los días del mes
      const numRows = Math.ceil(
        (startingDay +
          1 +
          new Date(currentYear, currentMonth + 1, 0).getDate()) /
          7
      );
      let date = 1;
      for (let i = 0; i < numRows; i++) {
        const row = document.createElement("tr");
        for (let j = 0; j < 7; j++) {
          const cell = document.createElement("td");
          if (i === 0 && j < startingDay) {
            // Celdas vacías antes del primer día del mes
            cell.textContent = "";
          } else if (
            date > new Date(currentYear, currentMonth + 1, 0).getDate()
          ) {
            // Celdas vacías después del último día del mes
            cell.textContent = "";
          } else {
            // Día del mes
            cell.textContent = date.toString();
            const diaDelMesActualEnNumero = Number(date.toString());
            //Si el diaDelMesActualEnNumero está en la lista de dias ocupados... queremos que se pinte de rojo
            if (
              (diasOcupadosArrayNumerico as Array<number>).includes(
                diaDelMesActualEnNumero
              )
            ) {
              cell.style.backgroundColor = "red";
            }
            date++;
          }
          row.appendChild(cell);
        }
        table.appendChild(row);
      }

      // Agregar la tabla al elemento div del calendario
      calendarDiv.appendChild(table);
    }
  }

  useEffect(() => {
    dibujarCalendario(currentYear, currentMonth);
  }, [currentYear, currentMonth]);
  return (
    <div>
      <Mimenu></Mimenu>
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Calendar</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen className="ion-padding">
          <h2>{generateCalendar(currentYear, currentMonth)}</h2>
          <div id="calendar" className="calendarr"></div>
          <div className="botones">
            <button className="botonmonthleft" onClick={prevMonth}>
              Anterior
            </button>
            <button className="botonmonthright" onClick={nextMonth}>
              Siguiente
            </button>
          </div>
        </IonContent>
      </IonPage>
    </div>
  );
}

export default CalendarComponent;
