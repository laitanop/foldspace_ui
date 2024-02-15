import * as React from 'react';
import * as dotenv from 'dotenv';
dotenv.config();
import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import { MintButton } from '../components/MintButton';
import Container from '@mui/material/Container';
import { useAccount, useBalance } from 'wagmi';

const Home: NextPage = () => {
    const { address, isConnected } = useAccount();
    // Adjust useBalance to conditionally fetch based on address availability
    const { data: balance, isError, isLoading, error } = useBalance({
        address: address
    });

    console.log("error loading balance ", error);
    return (
        <div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    padding: 12,
                }}
            >
                <ConnectButton />
            </div>
            <Container maxWidth="sm">
                {isConnected && (
                    <>
                        <div>Account: {address}</div>
                        {isLoading ? (
                            <div>Loading balance...</div>
                        ) : isError ? (
                            <div>Error fetching balance.</div>
                        ) : (
                            <div>Balance: {balance?.formatted} ETH</div>
                        )}
                        <MintButton />
                    </>
                )}
            </Container>
        </div>
    );
};

export default Home;
