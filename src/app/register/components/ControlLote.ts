export default function ControlLote(valuePay: string) {
    const newValue = valuePay.padStart(18, "0")
    const data = `08000000001${newValue}0001`
    const longData = data.padEnd(162, "0")
    return longData
}