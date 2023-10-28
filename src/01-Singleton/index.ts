/**
 * 인스턴스를 오직 하나만 존재하도록 보장하고, 전역적으로 접근할 수 있는 방법을 제공한다.
 */
export class Singleton {
  private static instance: Singleton;

  private constructor() {}

  public static getInstance() {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }

    return Singleton.instance;
  }
}
