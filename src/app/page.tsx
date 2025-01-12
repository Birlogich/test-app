"use client"

import {Login} from '@/components/Login';
import dynamic from 'next/dynamic';

const Switcher = dynamic(() => import('@/ui/Switcher'), { ssr: false });

export default function Home() {

  return (
    <>
     <Login/>
     <Switcher/>
    </>
  );
}
