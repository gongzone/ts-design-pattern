type DiscountType = "A" | "B" | "C";

/**
 * 상위 클래스에서 인스턴스를 만들 수 있는 인터페이스를 제공하고,
 * 구체적으로 어떤 인스턴스를 만들지는 하위 클래스가 정한다.
 */
export abstract class ProductFactory {
  public abstract createProduct(): Product;

  public getProduct(discountType: DiscountType) {
    const product = this.createProduct();
    const discount = this.calculateDiscount(discountType);

    product.setPrice(product.getPrice() * discount);

    return product;
  }

  private calculateDiscount(discountType: DiscountType): number {
    switch (discountType) {
      case "A":
        return 0.8;
      case "B":
        return 0.5;
      case "C":
        return 0.2;
      default:
        throw new Error("discountType이 올바르지 않습니다.");
    }
  }
}

export class ProductAFactory extends ProductFactory {
  public createProduct(): Product {
    return new ProductA();
  }
}

export class ProductBFactory extends ProductFactory {
  public createProduct(): Product {
    return new ProductB();
  }
}

class Product {
  private name: string;
  private price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  public getName(): string {
    return this.name;
  }

  public getPrice(): number {
    return this.price;
  }

  public setPrice(price: number): void {
    this.price = price;
  }
}

class ProductA extends Product {
  constructor() {
    super("ProductA", 1000);
  }
}

class ProductB extends Product {
  constructor() {
    super("ProductB", 5000);
  }
}
