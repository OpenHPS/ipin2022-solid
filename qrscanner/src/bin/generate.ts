import { SymbolicSpace } from '@openhps/geospatial';
import { AbsolutePosition } from '@openhps/core';
import { Spaces } from 'ipin2022-common';
import * as qr from 'qr-image';
import * as pdf from 'html-pdf';
import * as path from 'path';
import * as ejs from 'ejs';

// For each space
Object.keys(Spaces).forEach(key => {
    const space: SymbolicSpace<AbsolutePosition> = Spaces[key];
    // Create a QR-code with the URI
    const image = qr.imageSync(`http://example.com/tracking.ttl#${space.uid}`, { type: 'svg', ec_level: 'L' });
    // Render a PDF with the QR-code
    ejs.renderFile(path.join(__dirname, '../../templates/a4.ejs'), {
        qr: "data:image/svg+xml;base64," + Buffer.from(image).toString('base64'),
        name: space.displayName
    }, (err, str) => {
        if (err) {
            return;
        }
        pdf.create(str, {
            format: 'A4',
        }).toFile(path.join(__dirname, `../../pages/${space.uid}.pdf`), function(err, res) {
            if (err) return console.log(err);
            console.log(res);
        });
    });
});
