import Image from 'next/image';
import React from 'react';
import { Container } from './AuthLayout.styles';
import AuthBackground from '../assets/auth-background.jpg';

type LayoutProps = {
  children: React.ReactNode;
};

const AuthLayout = ({ children }: LayoutProps) => {
  return (
    <Container>
      <div className="auth-background">
        <Image src={AuthBackground} layout='fill' alt='Campo de futebol' objectFit='cover' />
      </div>
      <main>{children}</main>
    </Container>
  );
};

export default AuthLayout;
