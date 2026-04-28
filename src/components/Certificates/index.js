import React from 'react';
import styled from 'styled-components';
import { certificates } from '../../data/constants';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 40px 0px 80px 0px;
  @media (max-width: 960px) {
      padding: 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  padding-top: 40px;
  gap: 12px;
  @media (max-width: 960px) {
      flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 16px;
  }
`;

const CertificateContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 30px;
  justify-content: center;
`;

const CertificateCard = styled.a`
  width: 330px;
  text-decoration: none;
  background-color: ${({ theme }) => theme.card};
  border-radius: 10px;
  box-shadow: 0 0 12px 4px rgba(0,0,0,0.4);
  overflow: hidden;
  padding: 26px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: all 0.5s ease-in-out;
  &:hover {
      transform: translateY(-10px);
      box-shadow: 0 0 50px 4px rgba(0,0,0,0.6);
      filter: brightness(1.1);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  background-color: ${({ theme }) => theme.white};
  border-radius: 10px;
  box-shadow: 0 0 16px 2px rgba(0,0,0,0.3);
  object-fit: cover;
`;

const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0px;
  padding: 0px 2px;
`;

const CertTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

const Date = styled.div`
  font-size: 12px;
  margin-left: 2px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 80};
  @media only screen and (max-width: 768px){
      font-size: 10px;
  }
`;

const Issuer = styled.div`
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 99};
  margin-top: 8px;
  font-size: 14px;
`;

const Certificates = () => {
  return (
    <Container id="certificates">
      <Wrapper>
        <Title>Certificates</Title>
        <Desc>
          Here are some of my achievements and certifications.
        </Desc>
        <CertificateContainer>
          {certificates.map((cert) => (
            <CertificateCard href={cert.link} target="_blank" rel="noopener noreferrer" key={cert.id}>
              <Image src={cert.image} />
              <Details>
                <CertTitle>{cert.title}</CertTitle>
                <Date>{cert.date}</Date>
                <Issuer>{cert.issuer}</Issuer>
              </Details>
            </CertificateCard>
          ))}
        </CertificateContainer>
      </Wrapper>
    </Container>
  )
}

export default Certificates;
