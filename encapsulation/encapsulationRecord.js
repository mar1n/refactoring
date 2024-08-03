import _ from "lodash";
var data = {
  1920: {
    name: "martin",
    id: "1920",
    usages: {
      2016: {
        1: 50,
        2: 55,
        // remaining months of the year
      },
      2015: {
        1: 70,
        2: 63,
        // remaining months of the year
      },
    },
  },
};
var data2 = {
  1920: {
    name: "szymon",
    id: "1920",
    usages: {
      2016: {
        1: 50,
        2: 55,
        // remaining months of the year
      },
      2015: {
        1: 70,
        2: 63,
        // remaining months of the year
      },
    },
  },
};
//console.log(data["1920"]);
function compareUsage(customerID, laterYear, month) {
  const later = getCustomerData().rawData[customerID].usages[laterYear][month];
  const earlier = getCustomerData().rawData[customerID].usages[laterYear - 1][month];
  return { laterAmount: later, change: later - earlier };
}
//compareUsage("1920","2016", "1");
class CustomerData {
  constructor(data) {
    this._data = data;
  }
  setUsage(customerID, year, month, amount) {
    this._data[customerID].usages[year][month] = amount;
  }
  usage(customerID, year, month) {
    return this._data[customerID].usages[year][month];
  }
  get rawData() {
    return _.cloneDeep(this._data);
  }
}

function getCustomerData() {
  return data;
}
function getRawDataOfCustomers() {
  return data.rawData;
}
function setRawDataOfCustomer(arg) {
  data = new CustomerData(arg);
}

setRawDataOfCustomer(data2);
//setUsage(customerID, year, month, amount);
console.log("getRawDataOfCustomers", getRawDataOfCustomers());
console.log("compareUsage", compareUsage("1920","2016", "1"));
