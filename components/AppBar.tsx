import { FC } from "react";
import styles from "../styles/Home.module.css";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import Image from "next/image";

export const AppBar: FC = () => {
  return (
    <div className={styles.AppHeader}>
      <Image src="/logo.png" height={60} width={200} />
      <span>Dummy Token Faucet</span>
      <WalletMultiButton />
    </div>
  );
};
