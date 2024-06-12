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
function amountFor(aPerformance) {
  let result = 0;
  switch (aPerformance.play.type) {
    case "tragedy":
      result = 40000;
      if (aPerformance.audience > 30) {
        result += 1000 * (aPerformance.audience - 30);
      }
      break;
    case "comedy":
      result = 30000;
      if (aPerformance.audience > 20) {
        result += 10000 + 500 * (aPerformance.audience - 20);
      }
      result += 300 * aPerformance.audience;
      break;
    default:
      throw new Error(`unknown type: ${aPerformance.play.type}`);
  }
  return result;
}
const plays = {
  hamlet: { name: "Hamlet", type: "tragedy" },
  "as-like": { name: "As You Like It", type: "comedy" },
  othello: { name: "Othello", type: "tragedy" },
};
function playFor(aPerformance) {
  return plays[aPerformance.playID];
}

function volumeCreditsFor(aPerformance) {
  let result = 0;
  result += Math.max(aPerformance.audience - 30, 0);
  if ("comedy" === aPerformance.play.type)
    result += Math.floor(aPerformance.audience / 5);
  return result;
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
  ].map(enrichPerformance),
};
function totalVolumeCredits(data) {
  return data.reduce((total, p) => total + p.amount, 0);
}

function totalAmount(data) {
  return data.reduce((total, p) => total + p.amount, 0);
}

function statement(invoice, type) {
  return renderContent(invoice, type);
}

function enrichPerformance(aPerformance) {
  const result = Object.assign({}, aPerformance);
  result.play = playFor(result);
  result.amount = amountFor(result);
  result.volumeCredits = volumeCreditsFor(result);
  return result;
}

function renderContent(invoice, type) {
  let newLine = type === "txt" ? `\n` : `</br>`;
  let result = `Statment for ${invoice.customer}${newLine}`;
  for (let perf of invoice.performances) {
    result += ` ${playFor(perf).name}: ${usd(amountFor(perf))} (${
      perf.audience
    } seats)${newLine}`;
  }

  result += `Amount owed is ${usd(totalAmount(invoice.performances))}${newLine}`;
  result += `You earned ${totalVolumeCredits(invoice.performances)} credits${newLine}`;

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
