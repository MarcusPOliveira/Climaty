export function weatherImages(icon: string) {
  switch (icon) {
    case '01d':
      return require('@assets/Icons/01d.svg');
    case '01n':
      return require('@assets/Icons/01n.svg');
    case '02d':
      return require('@assets/Icons/02d.svg');
    case '02n':
      return require('@assets/Icons/02n.svg');
    case '03d':
      return require('@assets/Icons/03d.svg');
    case '03n':
      return require('@assets/Icons/03n.svg');
    case '04d':
      return require('@assets/Icons/04dn.svg');
    case '04n':
      return require('@assets/Icons/04dn.svg');
    case '09d':
      return require('@assets/Icons/09d.svg');
    case '09n':
      return require('@assets/Icons/09n.svg');
    case '10d':
      return require('@assets/Icons/10dn.svg');
    case '10n':
      return require('@assets/Icons/10dn.svg');
    case '11d':
      return require('@assets/Icons/11dn.svg');
    case '11n':
      return require('@assets/Icons/11dn.svg');
    case '13d':
      return require('@assets/Icons/13dn.svg');
    case '13n':
      return require('@assets/Icons/13dn.svg');
    case '50d':
      return require('@assets/Icons/50dn.svg');
    case '50n':
      return require('@assets/Icons/50dn.svg');
    default:
      break
  }
}
