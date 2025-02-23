# **📜 Request for Comments (RFC): DDD + Clean Architecture Framework**  
🚀 **A TypeScript framework for Domain-Driven Design (DDD) and Clean Architecture using Fastify.**  

| **RFC** | **001** |
|---------|---------|
| **Title** | DDD + Clean Architecture Framework |
| **Authors** | Gustavo Valle |
| **Status** | Draft |
| **Created** | 02/23/2025 |
| **Target Version** | v1.0.0 |
| **Reviewers** | Gustavo Valle |

---

## **1️⃣ Overview**
### **What is this framework?**
This framework provides a **structured approach to backend development** using **Domain-Driven Design (DDD) and Clean Architecture**, abstracting **repositories, aggregates, use cases, and event-driven mechanisms**.

### **Why does it matter?**
Modern backend applications often become **coupled to databases, frameworks, and infrastructure**. This framework enforces **separation of concerns** and **business logic-first development**, making applications **scalable, testable, and maintainable**.

### **Key Benefits:**
✅ **Strictly Enforces DDD Principles**  
✅ **Zero Boilerplate, High Productivity**  
✅ **Automatic API & Repository Wiring**  
✅ **Event-Driven, Microservice-Ready**  
✅ **Flexible ORM & DI Support**  
✅ **CLI & Code Generators for Speed**  

---

## **2️⃣ Goals & Non-Goals**
### **Goals**
- Provide **DDD-compliant** abstractions for **Entities, Aggregates, Repositories, Use Cases**.
- Enable **Fastify integration** with automatic API routing.
- Implement **CQRS, Command/Query Bus, and Event-Driven Architecture**.
- Offer **dependency injection (DI) support** with automatic registration.
- Include **CLI tooling** to generate entities, use cases, and controllers.

### **Non-Goals**
- This framework **is not** a full-fledged ORMs like Prisma or TypeORM.
- It **does not** replace Fastify but enhances it for **DDD-first development**.
- It **will not** enforce a specific database; it provides **adapter support**.

---

## **3️⃣ Architectural Overview**
This framework follows **DDD + Clean Architecture**:

### **📂 Project Structure**
```
/src/
│── domain/             # Business logic (Entities, Repositories, Aggregates)
│   ├── entities/
│   ├── repositories/
│   ├── services/
│── application/        # Use cases, command/query handlers
│   ├── use-cases/
│   ├── command-bus/
│   ├── query-bus/
│── interface/          # Fastify API controllers
│   ├── controllers/
│   ├── middlewares/
│── infrastructure/     # Database, ORM, Messaging
│   ├── persistence/
│   ├── messaging/
│── config/             # Configuration files
│── core/               # Core framework utilities
```

### **Core Components**
| Layer | Responsibilities |
|-------|-----------------|
| **Domain Layer** | Entities, Aggregates, Value Objects, Repositories |
| **Application Layer** | Use Cases, Command/Query Bus, Business Logic |
| **Interface Layer** | API Controllers (Fastify), GraphQL, WebSockets |
| **Infrastructure Layer** | ORM, Event Bus, External Services |

---

## **4️⃣ Features**
### **🛠️ Core Architectural Features**
- ✅ **Layered Architecture (Domain, Application, Interface, Infrastructure)**
- ✅ **Automatic API Route Registration for Use Cases**
- ✅ **ORM-agnostic Repository Pattern**
- ✅ **Dependency Injection (tsyringe, InversifyJS)**
- ✅ **CLI for Code Generation & Project Scaffolding**

### **⚡ Domain-Centric Features**
- 📌 **Entity & Value Object Abstraction**
- 🔗 **Aggregate Root Pattern**
- 🔄 **Domain Event Handling (Event Bus)**
- 🛡 **Unit of Work Pattern for Transaction Consistency**

### **🎯 Application Layer Features**
- 🏹 **CQRS Support (Command Bus & Query Bus)**
- 💡 **Middleware for Use Cases (Logging, Caching, etc.)**
- 🏷 **Automatic DTO Validation**

### **🔌 API & Interface Layer**
- 🚀 **Decorator-Based Controller Definitions**
- 🔧 **GraphQL & REST API Support**
- 📑 **Auto-Generated Swagger / OpenAPI Docs**

### **📡 Event-Driven & Messaging Features**
- 🔥 **Event Bus for In-App Event Dispatching**
- 🕵️ **Saga Pattern for Long-Running Workflows**
- 📊 **Message Queue Integrations (Kafka, RabbitMQ, NATS, Redis)**

### **🛡 Security & Best Practices**
- 🔑 **JWT Authentication & Role-Based Access Control (RBAC)**
- 🚀 **Secure Headers, CSRF & CORS Protection**
- 📜 **Audit Logging for Security Events**

---

## **5️⃣ Alternatives Considered**
| Framework | Pros | Cons |
|-----------|------|------|
| **NestJS (TypeScript)** | Strong DI, Modular, Scalable | Opinionated, Complex |
| **HerbsJS (Node.js)** | DDD-Friendly, CLI Tools | Limited Ecosystem |
| **Fastify Alone** | Lightweight, Fast | No DDD Abstractions |

### **Why Not Just Use NestJS?**
- NestJS enforces **controllers-first** development, while this framework is **domain-first**.
- **Faster and more lightweight** than NestJS, focusing on DDD **without extra NestJS overhead**.

---

## **6️⃣ Implementation Timeline**
| Phase | Duration | Key Deliverables |
|-------|----------|-----------------|
| **Phase 1** | **Weeks 1-3** | **Architecture, Initial Setup, RFC, GitHub Repository** |
| **Phase 2** | **Weeks 4-12** | **Core Framework (Entities, Repositories, Use Cases, Fastify API)** |
| **Phase 3** | **Weeks 13-22** | **CQRS, Event Bus, GraphQL, Security Enhancements** |
| **Phase 4** | **Weeks 23-28** | **Performance Optimization, Documentation, Beta Release** |

---

## **7️⃣ Open Questions**
- Should **ORM integration be part of the framework**, or should we rely only on adapters?
- Should the **Event Bus be internal**, or should we **support external message brokers** by default?
- How should **CQRS be structured**? Should we have separate **command/query buses**?

---

## **8️⃣ Next Steps**
- ✅ Approve the **RFC & Architecture**.
- ✅ Create an **initial GitHub repository**.
- ✅ Implement **Core Domain Layer**.
- 🚀 Move to **Phase 2 (Core Framework Implementation)**.

---

### **📢 Final Thoughts**
- This RFC **outlines the high-level vision** for the framework.
- The goal is to **abstract Fastify + DDD development** while keeping it **flexible and scalable**.
