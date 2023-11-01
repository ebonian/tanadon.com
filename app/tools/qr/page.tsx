'use client';

import QRCode from 'qrcode';
import { useState } from 'react';

export default function QR(): JSX.Element {
    const [url, setUrl] = useState('');
    const [qr, setQr] = useState('');

    const GenerateQRCode = () => {
        if (url) {
            QRCode.toDataURL(
                url,
                {
                    width: 500,
                    margin: 2,
                    color: {
                        dark: '#121212',
                        light: '#ffffff',
                    },
                },
                (err, url) => {
                    if (err) return console.error(err);

                    setQr(url);
                },
            );
        } else {
            setQr('');
        }
    };

    return (
        <div className="grid grid-cols-2">
            <div className="h-full w-full bg-white/10"></div>
            <div className="h-full w-full bg-white/10"></div>
        </div>
    );
}
