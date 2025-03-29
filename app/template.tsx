"use client";
import Header from '@/components/Header'
import {ReactNode} from "react";

export default function Template({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className='content'>
      <Header/>
      {children}
    </div>
  );
}
