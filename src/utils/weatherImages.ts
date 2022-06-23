//import all images
import Image01d from '@assets/Icons/01d.svg';
import Image01n from '@assets/Icons/01n.svg';
import Image02d from '@assets/Icons/02d.svg';
import Image02n from '@assets/Icons/02n.svg';
import Image03d from '@assets/Icons/03d.svg';
import Image03n from '@assets/Icons/03n.svg';
import Image04dn from '@assets/Icons/04dn.svg';
import Image09d from '@assets/Icons/09d.svg';
import Image09n from '@assets/Icons/09n.svg';
import Image10dn from '@assets/Icons/10dn.svg';
import Image11dn from '@assets/Icons/11dn.svg';
import Image13dn from '@assets/Icons/13dn.svg';
import Image50dn from '@assets/Icons/50dn.svg';

export default function weatherImage(icondId: string) {
  switch (icondId) {
    case '01d':
      return Image01d
    case '01n':
      return Image01n
    case '02d':
      return Image02d
    case '02n':
      return Image02n
    case '03d':
      return Image03d
    case '03n':
      return Image03n
    case '04d':
      return Image04dn
    case '04n':
      return Image04dn
    case '09d':
      return Image09d
    case '09n':
      return Image09n
    case '10d':
      return Image10dn
    case '10n':
      return Image10dn
    case '11d':
      return Image11dn
    case '11n':
      return Image11dn
    case '13d':
      return Image13dn
    case '13n':
      return Image13dn
    case '50d':
      return Image50dn
    case '50n':
      return Image50dn
    default:
      break
  }
}
