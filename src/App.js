import styled, { keyframes } from "styled-components";
import { getDayOfYear, getDaysInYear, getYear } from "date-fns";

const Container = styled.main`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: space-evenly;
  background-color: #282828;
`;

const ProgressBarWrapper = styled.div`
  width: 75%;
  height: 60px;
  border: 4px solid white;
  border-radius: 12px;
`;

const Title = styled.h2`
  font-size: 28px;
  color: white;
`;

const App = () => {
  const currentDay = getDayOfYear(new Date());
  const totalDays = getDaysInYear(new Date());
  const currentYear = getYear(new Date());
  const daysLeft = totalDays - currentDay;
  const progress = (currentDay / totalDays) * 100;

  const glow = keyframes`
    0%, 100% {
      box-shadow: 5px 0px 15px 0px #1ce01c;
    }
    45% {
      box-shadow: 1px 0px 4px 0px #1ce01c;
    }
  `;
  const progressIncrease = keyframes`
    from {
      width: 0;
    }
    to {
      width: ${progress}%;
    }
    `;

  const ProgressBar = styled.div`
    height: 100%;
    background: url("https://img.freepik.com/free-vector/green-diagonal-grunge-stripes-background_1409-1421.jpg");
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    color: white;
    font-weight: 700;
    background-repeat: no-repeat;
    background-size: cover;
    animation: ${progressIncrease} 2s ease-in-out forwards, ${glow} 1s infinite;
  `;
  console.log({ currentDay, totalDays, progress });
  return (
    <Container>
      <Title>{currentYear} progress Keep going!</Title>
      <ProgressBarWrapper>
        <ProgressBar>{`${Math.round(progress)} %`}</ProgressBar>
      </ProgressBarWrapper>
      <Title>
        {`Just ${daysLeft} ${daysLeft > 1 ? "days" : "day"} to LEVEL UP!`}
      </Title>
    </Container>
  );
};

export default App;
