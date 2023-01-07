import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Link from "next/link"
import { useRouter } from 'next/router'
import { useUser } from '@auth0/nextjs-auth0/client';
import { useEffect } from 'react'


export default function Index() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  console.log("User details are", user)
  if (user) {
    return (
      <div>
        Welcome <h1>{user.name}!</h1> <a href="/api/auth/logout">Logout</a>
      </div>
    );
  }

  return <a href="/api/auth/login">Login</a>;
}