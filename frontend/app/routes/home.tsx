import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { ClerkProvider, SignedIn, SignedOut, UserButton, SignInButton } from '@clerk/react-router';


export function meta({ }: Route.MetaArgs) {
  return [];
}

export default function Home() {
  return (<Welcome />);
}
