# **@churros/core** - A DDD & Clean Architecture Framework for TypeScript

## 🚀 **Why This Framework?**
Modern backend development often struggles with **tight coupling**, **lack of structure**, and **scalability issues**. `@churros/core` provides an opinionated yet flexible **Domain-Driven Design (DDD) and Clean Architecture** framework, ensuring **business logic is at the center** while keeping infrastructure decoupled.

### **The Philosophy: Freedom with Guidance**
- ✅ **Freedom** – You can use any ORM, API framework, or messaging system.
- ✅ **Guidance** – Enforces DDD best practices like **Entities, Aggregates, Repositories, Use Cases, CQRS, and Domain Events**.
- ✅ **Flexibility** – Works with **Fastify, Express, GraphQL, or gRPC**.
- ✅ **Scalability** – Supports **microservices, monoliths, event-driven architectures**.

---

## 🎯 **Core Principles**
- **🧠 Domain-Driven** – Everything revolves around **business logic**.
- **🔗 Decoupled Infrastructure** – The domain knows nothing about persistence, API layers, or external services.
- **📦 Modular & Scalable** – Supports **CQRS, Event-Driven Systems, Microservices**.
- **🛠 Framework-Agnostic** – Use Fastify, Express, NestJS, or GraphQL.
- **🔄 Dependency Injection (DI)** – Uses **InversifyJS** for flexibility and testability.

---

## 📂 **Project Structure**

```
/your-app
│── src/
│   ├── core/                 # Framework Core (Entities, Aggregates, Repositories, Use Cases, etc.)
│   ├── domain/               # Business logic (Entities, Repositories, Domain Services, Events)
│   ├── application/          # Use Cases, Command/Query Handlers
│   ├── infrastructure/       # Persistence, Messaging, API Controllers
│   ├── interface/            # Fastify/GraphQL API Layer
│   ├── server.ts             # Application entry point
│── package.json
│── tsconfig.json
│── README.md
```

---

## 🚀 **Installation**
```bash
npm install @churros/core inversify reflect-metadata
```

Make sure `reflect-metadata` is enabled in your `tsconfig.json`:
```json
{
  "compilerOptions": {
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true
  }
}
```

---

## 🛠 **Usage**

### **1️⃣ Defining an Entity**
```typescript
import { Entity } from "@churros/core";

export class Product extends Entity<{ name: string; price: number }> {
  constructor(props: { name: string; price: number }, id?: string) {
    super(props, id);
  }

  updatePrice(newPrice: number) {
    this.price = newPrice;
  }
}
```

---

### **2️⃣ Implementing a Repository**
```typescript
import { Repository } from "@churros/core";
import { Product } from "../entities/Product";

export abstract class ProductRepository implements Repository<Product> {
  abstract findById(id: string): Promise<Product | null>;
  abstract save(product: Product): Promise<void>;
  abstract delete(id: string): Promise<void>;
}
```

---

### **3️⃣ Creating an In-Memory Repository**
```typescript
import { injectable } from "inversify";
import { ProductRepository } from "../../domain/repositories/ProductRepository";
import { Product } from "../../domain/entities/Product";

@injectable()
export class InMemoryProductRepository implements ProductRepository {
  private products: Map<string, Product> = new Map();

  async findById(id: string): Promise<Product | null> {
    return this.products.get(id) || null;
  }

  async save(product: Product): Promise<void> {
    this.products.set(product.id, product);
  }

  async delete(id: string): Promise<void> {
    this.products.delete(id);
  }
}
```

---

### **4️⃣ Implementing a Use Case**
```typescript
import { injectable, inject } from "inversify";
import { UseCase } from "@churros/core";
import { Product } from "../../domain/entities/Product";
import { ProductRepository } from "../../domain/repositories/ProductRepository";
import { TYPES } from "../../core/container";

@injectable()
export class CreateProduct extends UseCase<{ name: string; price: number }, Product> {
  constructor(@inject(TYPES.ProductRepository) private productRepo: ProductRepository) {
    super();
  }

  async execute(input: { name: string; price: number }): Promise<Product> {
    const product = new Product(input);
    await this.productRepo.save(product);
    return product;
  }
}
```

---

### **5️⃣ Registering Dependencies with InversifyJS**
```typescript
import "reflect-metadata";
import { Container } from "inversify";
import { ProductRepository } from "../domain/repositories/ProductRepository";
import { InMemoryProductRepository } from "../infrastructure/persistence/InMemoryProductRepository";
import { CreateProduct } from "../application/use-cases/CreateProduct";

const TYPES = {
  ProductRepository: Symbol.for("ProductRepository"),
  CreateProduct: Symbol.for("CreateProduct"),
};

const container = new Container();
container.bind<ProductRepository>(TYPES.ProductRepository).to(InMemoryProductRepository);
container.bind<CreateProduct>(TYPES.CreateProduct).to(CreateProduct);

export { container, TYPES };
```

---

### **6️⃣ Exposing an API with Fastify**
```typescript
import Fastify from "fastify";
import { container, TYPES } from "./core/container";
import { CreateProduct } from "./application/use-cases/CreateProduct";

const fastify = Fastify({ logger: true });

fastify.post("/products", async (request, reply) => {
  const createProduct = container.get<CreateProduct>(TYPES.CreateProduct);
  const product = await createProduct.execute(request.body);
  return reply.send(product);
});

fastify.listen({ port: 3000 }, () => {
  console.log("🚀 Server running on http://localhost:3000");
});
```

---

## 🏗 **Final Thoughts**
`@churros/core` **empowers developers** by enforcing best practices while offering the **flexibility to build scalable applications**.

### 🔥 **What’s Next?**
- **Event Bus & Domain Events** 📨
- **CQRS & Command Bus** ⚡
- **Database Integration (Prisma, TypeORM, MongoDB)** 🗄️
- **Authentication & Authorization (RBAC, OAuth, JWT)** 🔑

🤔 **Have feedback? Want a feature?** Open an issue or contribute! 🚀
