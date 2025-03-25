// Create a singleton event target
export const eventTarget = new EventTarget()

export const getAccessRestrictionModeDescription = (accessRestrictionMode: number): string => {
  switch (accessRestrictionMode) {
    case 10:
    default:
      return "Все тарифы Клуба"
    case 20:
      return "Стандарт, Стандарт Плюс, Бизнес, Бизнес Плюс"
    case 25:
      return "Стандарт Плюс, Бизнес, Бизнес Плюс"
    case 30:
      return "Бизнес, Бизнес Плюс"
    case 40:
      return "Бизнес Плюс"
  }
}

export const getClassRussian = (classArg: number | null): string => {
  switch (classArg) {
    case 10:
      return "Базовый и выше"
    case 20:
      return "Стандарт и выше"
    case 25:
      return "Стандарт Плюс и выше"
    case 30:
      return "Бизнес и выше"
    case 40:
      return "Бизнес Плюс"
    default:
      return ""
  }
}

export const getClassSingle = (classArg: number | null): string => {
  switch (classArg) {
    case 5:
      return "Эксклюзив"
    case 10:
      return "Базовый"
    case 20:
      return "Стандарт"
    case 25:
      return "Стандарт Плюс"
    case 30:
      return "Бизнес"
    case 40:
      return "Бизнес Плюс"
    default:
      return ""
  }
}

export const categoryMapper = (mode: string): string => {
  switch (mode) {
    case "0":
      return "Статьи"
    case "1":
      return "Аудиоподкасты"
    case "2":
      return "Полезные видео"
    case "3":
      return "Книги"
    case "4":
      return "Медитации"
    default:
      return ""
  }
}

export const padLeftNumber = (value: number): string => {
  if (value < 10) return "0" + value
  else return value.toString()
}

export const makeDateTime = (input: string): string => {
  const date = new Date(input)

  const deltaHours = date.getTimezoneOffset() / 60

  date.setHours(date.getHours() - deltaHours)

  return (
    padLeftNumber(date.getDate()) +
    "." +
    padLeftNumber(date.getMonth() + 1) +
    "." +
    date.getFullYear() +
    " " +
    padLeftNumber(date.getHours()) +
    ":" +
    padLeftNumber(date.getMinutes())
  )
}

export const makeDateTimeForReaction = (input: string): string => {
  const date = new Date(input)
  date.setHours(date.getHours() - date.getTimezoneOffset() / 60)
  const now = new Date()

  let result = ""

  if (date.getDate() == now.getDate() && date.getMonth() == now.getMonth() && date.getFullYear() == now.getFullYear())
    result = "сегодня"
  else {
    const yesterday = new Date()
    yesterday.setTime(yesterday.getTime() - 86400000)
    const twoDaysAgo = new Date()
    twoDaysAgo.setTime(twoDaysAgo.getTime() - 2 * 86400000)

    if (yesterday.toLocaleDateString() === date.toLocaleDateString()) {
      result = "вчера"
    } else if (twoDaysAgo.toLocaleDateString() === date.toLocaleDateString()) {
      result = "позавчера"
    } else {
      result = padLeftNumber(date.getDate()) + "." + padLeftNumber(date.getMonth() + 1) + "." + date.getFullYear()
    }
  }

  return result + " в " + padLeftNumber(date.getHours()) + ":" + padLeftNumber(date.getMinutes())
}

export const makeDateTimeWithSeconds = (input: string): string => {
  const date = new Date(input)

  const deltaHours = date.getTimezoneOffset() / 60

  date.setHours(date.getHours() - deltaHours)

  return (
    padLeftNumber(date.getDate()) +
    "." +
    padLeftNumber(date.getMonth() + 1) +
    "." +
    date.getFullYear() +
    " " +
    padLeftNumber(date.getHours()) +
    ":" +
    padLeftNumber(date.getMinutes()) +
    ":" +
    padLeftNumber(date.getSeconds())
  )
}

export const makeDateTimeRussian = (input: string): string => {
  const months = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
  ]
  const date = new Date(input)
  return padLeftNumber(date.getDate()) + " " + months[date.getMonth()] + " " + date.getFullYear() + " г."
}

export const debounce = (func: (...args: any[]) => void, wait: number) => {
  let timeout: number

  return (...args: any[]) => {
    clearTimeout(timeout)
    timeout = window.setTimeout(() => func(...args), wait)
  }
}

export const yearRussian = (year: number): string => {
  switch (year) {
    case 1:
      return "год"
    case 2:
    case 3:
    case 4:
      return "года"
    default:
      return "лет"
  }
}

export const monthRussian = (month: number): string => {
  switch (month) {
    case 1:
      return "месяц"
    case 2:
    case 3:
    case 4:
      return "месяца"
    default:
      return "месяцев"
  }
}

export const makeYearsAndMonths = (level: number): string => {
  const years = Math.floor(level / 12)
  const months = level - years * 12
  if (years > 0 && months > 0) {
    return years + " " + yearRussian(years) + ", " + months + " " + monthRussian(months)
  } else if (years == 0) {
    return months + " " + monthRussian(months)
  } else {
    return years + " " + yearRussian(years)
  }
}

export const saveCookie = (name: string, value: string, days: number) => {
  let expires = ""
  if (days) {
    const date = new Date()
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
    expires = "; expires=" + date.toUTCString()
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/"
}

export const getCookie = (name: string): string | null => {
  const nameEQ = name + "="
  const cookiesArray = document.cookie.split(";")

  for (let i = 0; i < cookiesArray.length; i++) {
    const cookie = cookiesArray[i].trim()
    if (cookie.indexOf(nameEQ) == 0) {
      return cookie.substring(nameEQ.length, cookie.length)
    }
  }
  return null
}

export const makeDateHeaderRussian = (input: string): string => {
  const date = new Date(input)
  date.setHours(date.getHours() - date.getTimezoneOffset() / 60)
  const now = new Date()

  if (date.getDate() == now.getDate() && date.getMonth() == now.getMonth() && date.getFullYear() == now.getFullYear())
    return "Сегодня"

  const yesterday = new Date()
  yesterday.setTime(yesterday.getTime() - 86400000)
  const twoDaysAgo = new Date()
  twoDaysAgo.setTime(twoDaysAgo.getTime() - 2 * 86400000)

  let result = ""
  if (yesterday.toLocaleDateString() === date.toLocaleDateString()) {
    result = "Вчера, "
  } else if (twoDaysAgo.toLocaleDateString() === date.toLocaleDateString()) {
    result = "Позавчера, "
  }

  const months = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
  ]
  const weekDays = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"]
  return (
    result +
    date.getDate() +
    " " +
    months[date.getMonth()] +
    (now.getFullYear() != date.getFullYear() ? " " + date.getFullYear() : "") +
    " (" +
    weekDays[date.getDay()] +
    ")"
  )
}

export const makeDateChallengeRussian = (input: string): string => {
  const date = new Date(input)
  const now = new Date()
  let result = ""

  const yesterday = new Date()
  yesterday.setTime(yesterday.getTime() - 86400000)

  if (date.getDate() == now.getDate() && date.getMonth() == now.getMonth() && date.getFullYear() == now.getFullYear())
    result = "сегодня, "
  else if (yesterday.toLocaleDateString() === date.toLocaleDateString()) result = "вчера, "

  const months = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
  ]
  const weekDays = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"]
  return result + date.getDate() + " " + months[date.getMonth()] + " (" + weekDays[date.getDay()] + ")"
}

export const makeDateForCharity = (input: string): string => {
  const date = new Date(input)

  const months = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
  ]
  const weekDays = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"]

  return (
    date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear() + " (" + weekDays[date.getDay()] + ")"
  )
}

export const getDaysTextRussian = (count: number) => {
  if (count % 100 >= 10 && count % 100 <= 20) {
    return "дней"
  } else {
    if (count % 10 == 0) return "дней"
    if (count % 10 == 1) return "день"
    if (count % 10 == 2) return "дня"
    if (count % 10 == 3) return "дня"
    if (count % 10 == 4) return "дня"
    if (count % 10 == 5) return "дней"
    if (count % 10 == 6) return "дней"
    if (count % 10 == 7) return "дней"
    if (count % 10 == 8) return "дней"
    if (count % 10 == 9) return "дней"
  }
}

const getAgesTextRussian = (count: number) => {
  if (count % 100 >= 10 && count % 100 <= 20) {
    return "лет"
  } else {
    if (count % 10 == 0) return "лет"
    if (count % 10 == 1) return "год"
    if (count % 10 == 2) return "года"
    if (count % 10 == 3) return "года"
    if (count % 10 == 4) return "года"
    if (count % 10 == 5) return "лет"
    if (count % 10 == 6) return "лет"
    if (count % 10 == 7) return "лет"
    if (count % 10 == 8) return "лет"
    if (count % 10 == 9) return "лет"
  }
}

export const makeAgeString = (input: string): string => {
  if (input == null || input.length == 0) return "Не указана"
  const today = new Date()
  const birth = new Date(input)

  let age = today.getFullYear() - birth.getFullYear()
  const monthDiff = today.getMonth() - birth.getMonth()
  const dayDiff = today.getDate() - birth.getDate()

  // Adjust age if birth month/day hasn't occurred yet this year
  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--
  }

  return `${padLeftNumber(birth.getDate())}.${padLeftNumber(birth.getMonth() + 1)}.${birth.getFullYear()} (${Math.floor(age)} ${getAgesTextRussian(Math.floor(age))})`
}

export const getMembersCountTextRussian = (input: string): string => {
  if (input.length == 0) return "человек"
  const count = Number.parseInt(input)
  if (count % 100 >= 10 && count % 100 <= 20) {
    return "человек"
  } else {
    if (count % 10 == 0) return "человек"
    if (count % 10 == 1) return "человек"
    if (count % 10 == 2) return "человека"
    if (count % 10 == 3) return "человека"
    if (count % 10 == 4) return "человека"
    if (count % 10 == 5) return "человек"
    if (count % 10 == 6) return "человек"
    if (count % 10 == 7) return "человек"
    if (count % 10 == 8) return "человек"
    if (count % 10 == 9) return "человек"
  }
  return ""
}

const getWorkingDays = (year: number, month: number): number => {
  let workingDays = 0

  // Get the total number of days in the month
  const totalDays = new Date(year, month + 1, 0).getDate()

  // Loop through all days of the month
  for (let day = 1; day <= totalDays; day++) {
    const date = new Date(year, month, day)
    const dayOfWeek = date.getDay()

    // Check if the day is a weekday (Monday to Friday)
    if (dayOfWeek >= 1 && dayOfWeek <= 5) {
      workingDays++
    }
  }

  return workingDays
}

export const getMaximumChallengeValue = () => {
  const today = new Date()
  return getWorkingDays(today.getFullYear(), today.getMonth()) * 5
}

export const getPtsTextRussian = (count: number): string => {
  if (count == 0) return "баллов"
  if (count % 100 >= 10 && count % 100 <= 20) {
    return "баллов"
  } else {
    if (count % 10 == 0) return "баллов"
    if (count % 10 == 1) return "балл"
    if (count % 10 == 2) return "балла"
    if (count % 10 == 3) return "балла"
    if (count % 10 == 4) return "балла"
    if (count % 10 == 5) return "баллов"
    if (count % 10 == 6) return "баллов"
    if (count % 10 == 7) return "баллов"
    if (count % 10 == 8) return "баллов"
    if (count % 10 == 9) return "баллов"
  }
  return ""
}

export const getMonthChallengeTextRussian = (): string => {
  switch (new Date().getMonth()) {
    case 0:
      return "Январского"
    case 1:
      return "Февральского"
    case 2:
      return "Мартовского"
    case 3:
      return "Апрельского"
    case 4:
      return "Майского"
    case 5:
      return "Июньского"
    case 6:
      return "Июльского"
    case 7:
      return "Августовского"
    case 8:
      return "Сентябрьского"
    case 9:
      return "Октябрьского"
    case 10:
      return "Ноябрьского"
    case 11:
      return "Декабрьского"
    default:
      return ""
  }
}

export const getPrevMonthAchievementTextRussian = (month: number) => {
  switch (new Date().getMonth()) {
    case 1:
      return "Января"
    case 2:
      return "Февраля"
    case 3:
      return "Марта"
    case 4:
      return "Апреля"
    case 5:
      return "Мая"
    case 6:
      return "Июня"
    case 7:
      return "Июля"
    case 8:
      return "Августа"
    case 9:
      return "Сентября"
    case 10:
      return "Октября"
    case 11:
      return "Ноября"
    case 0:
      return "Декабря"
    default:
      return ""
  }
}

export const getResidentsText = (count: number) => {
  if (count == 0) return "Резидентов"
  if (count % 100 >= 10 && count % 100 <= 20) {
    return "Резидентов"
  } else {
    if (count % 10 == 0) return "Резидентов"
    if (count % 10 == 1) return "Резидент"
    if (count % 10 == 2) return "Резидента"
    if (count % 10 == 3) return "Резидента"
    if (count % 10 == 4) return "Резидента"
    if (count % 10 == 5) return "Резидентов"
    if (count % 10 == 6) return "Резидентов"
    if (count % 10 == 7) return "Резидентов"
    if (count % 10 == 8) return "Резидентов"
    if (count % 10 == 9) return "Резидентов"
  }
  return ""
}

export const generateUUID = (): string => {
  // Generate a random 32-character hexadecimal string
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

export const formatCost = (cost: number) => {
  if (cost * 100 - Math.floor(cost * 100) > 0) {
    return `${cost.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`
  } else return `${cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`
}

// Function to copy card number to clipboard
export const copyToClipboard = (text: string, message: string) => {
  navigator.clipboard.writeText(text).then(() => {
    alert(message)
  })
}

export const getTransactionDescription = (code: number): string => {
  switch (code) {
    case 1:
      return "Личная рекомендация"
    case 2:
      return "Чётная продажа"
    case 3:
      return "Быстрый старт"
    case 4:
      return "Резидуальный (классика)"
    case 5:
      return "Командный (бинар)"
    case 6:
      return "Пассивный бинар"
    case 7:
      return "Лидерский линейный"
    case 8:
      return "Вклад в компанию"
    case 9:
      return "ERA Travel"
    case 10:
      return "Внутренний перевод"
    case 11:
      return "Отмена операции"

    case -1:
      return "Вывод средств"
    case -2:
      return "Абонплата"
    case -3:
      return "Абонплата (частично)"
    case -4:
      return "Апгрейд тарифа"
    case -5:
      return "Апгрейд тарифа (частично)"
    case -6:
      return "Регистрация новичка"
    case -7:
      return "Отмена регистрации"
    case -10:
      return "Внутренний перевод"
    case -11:
      return "Отмена операции"

    default:
      return "Неизвестный тип операции"
  }
}

export const getReactionByCode = (code: number) => {
  switch (code) {
    case 0:
      return "👍"
    case 1:
      return "🔥"
    case 2:
      return "😁"
    case 3:
      return "😂"
    case 4:
      return "❤️"
    case 5:
      return "❤️‍🔥"
    default:
      return ""
  }
}

export const getReactionsTextRussian = (count: number): string => {
  if (count == 0) return "баллов"
  if (count % 100 >= 10 && count % 100 <= 20) {
    return "баллов"
  } else {
    if (count % 10 == 0) return "реакций"
    if (count % 10 == 1) return "реакция"
    if (count % 10 == 2) return "реакции"
    if (count % 10 == 3) return "реакции"
    if (count % 10 == 4) return "реакции"
    if (count % 10 == 5) return "реакций"
    if (count % 10 == 6) return "реакций"
    if (count % 10 == 7) return "реакций"
    if (count % 10 == 8) return "реакций"
    if (count % 10 == 9) return "реакций"
  }
  return ""
}

