import { useState } from 'react';
import { Container } from 'semantic-ui-react'
import AdminLogin from '../components/Admin-Login/Admin-Login';

export default function Home() {
  return (
    <Container>
      <AdminLogin/>
    </Container>
  )
}
