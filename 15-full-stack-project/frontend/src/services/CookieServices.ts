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
    // default to "/" so cookies set with path "/" are removed from nested routes too
    cookies.remove(name, { path: "/", ...options });
  }
}

export default new CookieServices();
