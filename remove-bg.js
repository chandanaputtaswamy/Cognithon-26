import { removeBackground } from '@imgly/background-removal-node';
import fs from 'fs';
import path from 'path';

async function processImage(inputPath, outputPath) {
    try {
        console.log(`Processing ${inputPath}...`);
        const blob = await removeBackground(inputPath);
        const buffer = Buffer.from(await blob.arrayBuffer());
        fs.writeFileSync(outputPath, buffer);
        console.log(`Saved ${outputPath}`);
    } catch (error) {
        console.error(`Error processing ${inputPath}:`, error);
    }
}

async function main() {
    const ashaPath = path.resolve('src/assets/asha.jpeg');
    const bharthiPath = path.resolve('src/assets/bharthi.jpeg');

    const ashaOutPath = path.resolve('src/assets/asha-nobg.png');
    const bharthiOutPath = path.resolve('src/assets/bharthi-nobg.png');

    await processImage(ashaPath, ashaOutPath);
    await processImage(bharthiPath, bharthiOutPath);
}

main();
