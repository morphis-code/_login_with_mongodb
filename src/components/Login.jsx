"use client"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import Link from "next/link"


export default function Login(){
    return(
        <form className="w-full max-w-[400px]">
            <Card className="w-full border-0 shadow-none lg:border-1 lg:shadow ">
            <CardHeader>
                <CardTitle>Login</CardTitle>
                <CardDescription>Um login comum com um estilo comum...</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col gap-2 mb-5">
                    <Label>Email</Label>
                    <Input/>
                </div>
                <div className="flex flex-col gap-2 mb-7">
                    <Label>Password</Label>
                    <Input/>
                </div>
                <Button className="w-full cursor-pointer" type="submit">Enviar</Button>
            </CardContent>
            <CardFooter>
                <Link href="/register">Cadastra-se</Link>
            </CardFooter>
            </Card>            
        </form>
    )
}