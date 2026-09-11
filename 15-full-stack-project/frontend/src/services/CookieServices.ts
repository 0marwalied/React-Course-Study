import Cookies from "universal-cookie";
import type { CookieSetOptions } from "universal-cookie";

const cookies = new Cookies();

class CookieServices {
  get(name: string): string | undefined {
    return cookies.get(name);
  }
  set(name: string, value: string, options?: CookieSetOptions): void {
    cookies.set(name, value, options);
  }
  remove(name: string, options?: CookieSetOptions): void {
    cookies.remove(name, options);
  }
}

export default new CookieServices();
