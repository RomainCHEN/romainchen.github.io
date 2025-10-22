---
title: "React Hooks 完全指南"
date: "2025-10-18"
description: "深入了解 React Hooks，包括 useState、useEffect、useContext 等常用 Hooks 的使用方法和最佳实践。"
lang: "zh"
---

## React Hooks 简介

React Hooks 是 React 16.8 引入的新特性，它允许你在不编写类组件的情况下使用状态和其他 React 特性。

### 为什么使用 Hooks？

- **更简洁的代码**：不需要类组件的样板代码
- **更好的逻辑复用**：通过自定义 Hooks 复用状态逻辑
- **更容易理解**：避免 `this` 关键字的困惑

## 基础 Hooks

### useState

`useState` 是最常用的 Hook，用于在函数组件中添加状态：

```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>当前计数：{count}</p>
      <button onClick={() => setCount(count + 1)}>
        增加
      </button>
    </div>
  );
}
```

### useEffect

`useEffect` 用于处理副作用，如数据获取、订阅等：

```jsx
import { useState, useEffect } from 'react';

function DataFetcher() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://api.example.com/data');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('获取数据失败：', error);
      } finally {
        setLoading(false);
      }
    }
    
    fetchData();
  }, []); // 空数组表示只在组件挂载时执行
  
  if (loading) return <div>加载中...</div>;
  
  return <div>{/* 渲染数据 */}</div>;
}
```

### useContext

`useContext` 用于在组件树中共享数据：

```jsx
import { createContext, useContext } from 'react';

const ThemeContext = createContext('light');

function ThemedButton() {
  const theme = useContext(ThemeContext);
  
  return (
    <button className={theme === 'dark' ? 'dark-btn' : 'light-btn'}>
      主题按钮
    </button>
  );
}
```

## 高级 Hooks

### useReducer

适合管理复杂的状态逻辑：

```jsx
import { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  
  return (
    <div>
      <p>计数：{state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>
        +
      </button>
      <button onClick={() => dispatch({ type: 'decrement' })}>
        -
      </button>
    </div>
  );
}
```

### useMemo

用于优化昂贵的计算：

```jsx
import { useMemo } from 'react';

function ExpensiveComponent({ data }) {
  const processedData = useMemo(() => {
    // 昂贵的计算
    return data.map(item => item * 2);
  }, [data]); // 只在 data 改变时重新计算
  
  return <div>{/* 使用 processedData */}</div>;
}
```

### useCallback

用于记忆化回调函数：

```jsx
import { useCallback, useState } from 'react';

function ParentComponent() {
  const [count, setCount] = useState(0);
  
  const handleClick = useCallback(() => {
    console.log('按钮被点击');
  }, []); // 回调函数不依赖任何变量
  
  return <ChildComponent onClick={handleClick} />;
}
```

## 自定义 Hooks

创建自己的 Hooks 来复用逻辑：

```jsx
import { useState, useEffect } from 'react';

function useWindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  
  useEffect(() => {
    function handleResize() {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return size;
}

// 使用自定义 Hook
function MyComponent() {
  const { width, height } = useWindowSize();
  
  return (
    <div>
      窗口大小：{width} x {height}
    </div>
  );
}
```

## 最佳实践

### 1. 遵循 Hooks 规则

- 只在函数顶层调用 Hooks
- 只在 React 函数中调用 Hooks

### 2. 正确使用依赖数组

```jsx
// ✅ 正确
useEffect(() => {
  fetchData(userId);
}, [userId]);

// ❌ 错误 - 缺少依赖
useEffect(() => {
  fetchData(userId);
}, []);
```

### 3. 避免过度优化

不要过早使用 `useMemo` 和 `useCallback`，先确保真的有性能问题。

## 总结

React Hooks 是现代 React 开发的基础，掌握它们能让你写出更简洁、更易维护的代码。继续实践和探索，你会发现 Hooks 的强大之处！

---

*持续学习，不断进步！* 💪

