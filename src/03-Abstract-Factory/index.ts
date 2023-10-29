/**
 * 서로 관련있는 여러 객체를 만들어주는 인터페이스,
 * 구체적으로 어떤 클래스의 인스턴스를(concrete product) 사용하는지 감출 수 있다.
 */
interface AbstractFactory {
  createProductA(): AbstractProductA;
  createProductB(): AbstractProductB;
}

class ConcreteFactory1 implements AbstractFactory {
  public createProductA(): AbstractProductA {
    return new ConcreteProductA1();
  }

  public createProductB(): AbstractProductB {
    return new ConcreteProductB1();
  }
}

class ConcreteFactory2 implements AbstractFactory {
  public createProductA(): AbstractProductA {
    return new ConcreteProductA2();
  }

  public createProductB(): AbstractProductB {
    return new ConcreteProductB2();
  }
}

interface AbstractProductA {
  methodA(): string;
}

class ConcreteProductA1 implements AbstractProductA {
  public methodA(): string {
    return "The result of the product A1.";
  }
}

class ConcreteProductA2 implements AbstractProductA {
  public methodA(): string {
    return "The result of the product A2.";
  }
}

interface AbstractProductB {
  methodB(): string;
}

class ConcreteProductB1 implements AbstractProductB {
  public methodB(): string {
    return "The result of the product B1.";
  }
}

class ConcreteProductB2 implements AbstractProductB {
  public methodB(): string {
    return "The result of the product B2.";
  }
}
