import React from 'react';
import '../styles/JeonnamCovid.scss';
import styled from 'styled-components';
import {FixMapIMGWrapper,} from '../components/fixComponent';
import jeonnam_img from '../img/background/Jeonnam_covid_img.jpg';
import MarkerRenderComponet from '../components/MarkerRenderComponet';
import CovidCurrentStaus from '../components/CovidCurrentStaus';
import CovidHospitalList from '../components/CovidHospitalList';
import CovidHospitalSearch from '../components/CovidHospitalSearch';
import CovidSeriousPatient from '../components/CovidSeriousPatient';
import CovidMildPatient from '../components/CovidMildPatient';

const FixWrapper =  styled.div`
  position: absolute;
  width: 100%;
  zoom: ${props=>props.zoom_in};

  ::before{
    content: "";
    display: flex;
    padding-top: 56.25%;
  }
`

const JeonnamCovid = () => {

  let zoom_in = 1/(window.devicePixelRatio*0.8);

  window.onresize = function() {
    zoom_in = window.devicePixelRatio;
    zoom_in = 1/(zoom_in*0.8)
    console.log(zoom_in)
  }

  return (
    <div className="jeonnam-covid-body-wrapper">
      <FixWrapper zoom_in={zoom_in}>
        <FixMapIMGWrapper>
          <img
            src={jeonnam_img}
            alt="jeonnam_map_img"
            className="jeonnam_img"
          />
        </FixMapIMGWrapper>
      </FixWrapper>

      <MarkerRenderComponet zoom_in={zoom_in} top={37.9} left={58.4} color="green" />
      <MarkerRenderComponet zoom_in={zoom_in} top={31.5} left={62.75} color="green" />
      <MarkerRenderComponet zoom_in={zoom_in} top={26.2} left={58.7} color="green" />
      <MarkerRenderComponet zoom_in={zoom_in} top={20.38} left={42.25} color="yellow" />
      <MarkerRenderComponet zoom_in={zoom_in} top={35.2} left={47.1} color="yellow" />
      <MarkerRenderComponet zoom_in={zoom_in} top={65} left={72.74} color="red" />


      <CovidCurrentStaus city="Jeonnam" zoom_in={zoom_in} ></CovidCurrentStaus>
      <CovidHospitalList zoom_in={zoom_in}></CovidHospitalList>
      <CovidHospitalSearch zoom_in={zoom_in}></CovidHospitalSearch>
      <CovidSeriousPatient zoom_in={zoom_in}></CovidSeriousPatient>
      <CovidMildPatient zoom_in={zoom_in}></CovidMildPatient>
    </div>
  );
};

export default JeonnamCovid;
