
const stockData = {
  TSMC: {
    name: "台積電",
    code: "2330.TW",
    dates: ["04/08", "04/09", "04/10", "04/11", "04/12", "04/15", "04/16", "04/17"],
    prices: [829, 836, 839, 845, 850, 856, 846, 848],
    ma5: [null, null, null, 839.8, 844, 847.2, 847.2, 849],
    ma20: [null, null, null, null, null, null, null, 840],
  },
  AAPL: {
    name: "Apple",
    code: "AAPL.US",
    dates: ["04/08", "04/09", "04/10", "04/11", "04/12", "04/15", "04/16", "04/17"],
    prices: [176, 178, 179, 177, 180, 181, 182, 183],
    ma5: [null, null, null, 178, 178.8, 179, 179.8, 180.6],
    ma20: [null, null, null, null, null, null, null, 178],
  }
}
export default stockData
