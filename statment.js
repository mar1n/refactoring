import createStatementData from './createStatementData.js';
import { writeFile, writeFileSync } from 'fs';

function createFile(fileType, content) {
  writeFile(`statement.${fileType}`, content, (err) => {
    if (err) {
        console.error('An error occurred while writing to the file:', err);
    } else {
        console.log('File has been created successfully!');
    }
});
}

function usd(aNumber) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(aNumber / 100);
}
const invoice = {
  customer: "BigCo",
  performances: [
    {
      playID: "hamlet",
      audience: 55,
    },
    {
      playID: "as-like",
      audience: 35,
    },
    {
      playID: "othello",
      audience: 40,
    },
  ]
};

function statement(invoice, type) {
  return renderContent(createStatementData(invoice), type);
}

function renderContent(data, type) {
  let newLine = type === "txt" ? `\n` : `</br>`;
  let result = `Statment for ${data.customer}${newLine}`;
  for (let perf of data.performances) {
    result += ` ${perf.play.name}: ${usd(perf.amount)} (${
      perf.audience
    } seats)${newLine}`;
  }

  result += `Amount owed is ${usd(data.totalAmount)}${newLine}`;
  result += `You earned ${data.totalVolumeCredits} credits${newLine}`;

  return result;
}

async function szymon() {
  try {
    // const { default: [invoice] = json } = await import("./invoices.json", {
    //   assert: { type: "json" },
    // });

    // const { default: plays } = await import("./plays.json", {
    //   assert: { type: "json" },
    // });
    createFile('txt', statement(invoice, 'txt'));
    console.log(statement(invoice, "txt"));
  } catch (err) {
    console.log("err", err);
  }
}

szymon();
