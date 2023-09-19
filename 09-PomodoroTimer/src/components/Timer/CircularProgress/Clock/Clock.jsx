import { useEffect, useState } from "react";
import styled from "styled-components";

const Clock = () => {
    const [time, setTime] = useState(100);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        if(isActive && time>0){
        const interval = setInterval(() => {
            setTime((time) => time - 1);
        }, 1000);

        return () => clearInterval(interval);
        }
    },[time, isActive]);

    const getTime = (time) => {
        const min = Math.floor(time / 60);
        const sec = time % 60;
        return `${min < 10 ? "0" + min : min}:${sec < 10 ? "0" + sec : sec}`;
    }

    const toggleClock = () => {
        setIsActive(!isActive);
    }

  return (
    <ClockContainer>
      <TimerText>{getTime(time)}</TimerText>
      <StartPauseButton onClick={toggleClock}>{isActive ? "Pause" : "Start" }</StartPauseButton>
    </ClockContainer>
  );
};

export default Clock;

const ClockContainer = styled.div`
display:grid;
place-items:center;`;

const TimerText = styled.h3`
  font-size: 10rem;
  transition: all .3s;
  @media screen and (max-width: 480px) {
    font-size: 5rem;
  }
`;

const StartPauseButton = styled.button`
all: unset;
text-align: center;
font-size: 3rem;
text-transform: uppercase;
letter-spacing: 1rem;
cursor: pointer;
transition: all .3s;
  @media screen and (max-width: 480px) {
    font-size: 2rem;
    letter-spacing: .5rem;
  }
`;
