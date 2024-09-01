export const formateDate = (date) => {
  const d = new Date(date)
  const yy = d.getFullYear()
  const mm = d.getMonth() + 1
  const dd = d.getDate()
  return `${yy} 年 ${mm} 月 ${dd} 日`
}

const timeUnits = [
  { divisor: 1000, unit: "秒" },
  { divisor: 60, unit: "分种" },
  { divisor: 60, unit: "小时" },
  { divisor: 24, unit: "天" },
  { divisor: 30, unit: "个月" },
  { divisor: 12, unit: "年" },
  { divisor: Number.POSITIVE_INFINITY },
]

export const getTimeAgo = (date) => {
  // 今天 几天前 几周前 几个月前 几年前 /1000
  const elapse = Date.now() - new Date(date)
  let result = elapse
  for (let i = 0; i < timeUnits.length - 1; i++) {
    const { divisor, unit } = timeUnits[i]
    result = result / divisor
    if (result > timeUnits[i + 1].divisor) {
      continue
    } else {
      return `${Math.floor(result)} ${unit}`
    }
  }
}
