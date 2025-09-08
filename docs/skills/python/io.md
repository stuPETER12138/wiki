# IO

我们知道，CPU 和内存的速度远高于外设的速度。当我们要把 100MB 的数据写入磁盘时，CPU 输出 100MB 的数据只需要 0.01 秒，可是磁盘要接收这 100MB 数据可能需要10秒，为之奈何？

1. 让是 CPU 等着，程序暂停，等 100MB 的数据在 10 秒后写入磁盘，再接着执行，这种模式称为同步 IO；

2. CPU 不等待，只是告诉磁盘，“您老慢慢写，不着急，我接着干别的事去了“，于是，后续代码可以立刻接着执行，这种模式称为异步 IO。

## 异步 IO

> The forward logic is only about 10% of your code, everything else is 90%.
>
> -- Michael Stonebraker

`async def`	

- `async for`
- `await`

`async with`

**`async def`**：定义异步函数（协程）。调用异步函数不会立即执行，而是返回一个需要被调度和运行的协程对象。

**Event loop**：事件循环负责异步操作的调度和执行。它不断检查并执行任务（协程）。所有异步操作都由这个循环运行，并且每个线程只能有一个事件循环。

**`asyncio.run()`**：此函数是运行异步程序的入口点。它创建并管理事件循环，并在完成后进行清理。请记住，它被设计为每个线程调用一次。

**``await`**：在异步函数内部，用于暂停当前函数的执行，直到被 await 的任务完成。当您编写 `await some_fn()` 时，函数会将控制权交还给事件循环，以便其他任务可以被调度和运行。一次只有一个异步函数执行，它们通过使用 `await` 来协作（让出控制权）。

**Cooperative Concurrency**：尽管您可以调度多个异步任务，但一次只有一个任务运行。这与真正的并行不同，后者是多个任务同时运行。当一个任务遇到 `await` 时，它会暂停执行，以便另一个任务可以运行。这使得异步程序非常适合 I/O 密集型任务，其中等待很常见，例如对 LLMs 和其他服务的 API 调用。

> Asyncio 实现了并发，但不会并行运行任务。对于需要并行执行的 CPU 密集型工作，请考虑使用线程（threading）或多进程（multiprocessing）。

**`asyncio.to_thread()`**：有时您需要在不冻结异步程序的情况下运行同步（阻塞）代码。`asyncio.to_thread()` 将阻塞代码卸载到单独的线程中，允许事件循环继续处理其他任务。请谨慎使用它，因为它会增加一些开销并可能使调试更具挑战性。

> 备选方案：执行器（Executors）：您也可能会遇到使用 `loop.run_in_executor()` 来处理阻塞函数的情况。

```python
import asyncio

async def fetch_data(delay):
    print(f"Started fetching data with {delay}s delay")

    # Simulates I/O-bound work, such as network operation
    await asyncio.sleep(delay)

    print("Finished fetching data")
    return f"Data after {delay}s"


async def main():
    print("Starting main")

    # Schedule two tasks concurrently
    task1 = asyncio.create_task(fetch_data(2))
    task2 = asyncio.create_task(fetch_data(3))

    # Wait until both tasks complete
    result1, result2 = await asyncio.gather(task1, task2)

    print(result1)
    print(result2)
    print("Main complete")


if name == "main":
    asyncio.run(main())
```

