<!-- 
<style>
table { width: 100%; }
</style>
-->

# AI Models Comparison Table

This table provides a comprehensive comparison of various AI language models and their architectural characteristics.

| AI Model | Year | Norm | Parallel Layer | Pre-norm | Position embedding | Activation | Stability tricks | MoE/Dense |
|----------|------|------|----------------|----------|-------------------|------------|------------------|-----------|
| Original transformer | 2017 | LayerNorm | Serial | ☐ | Sine | ReLU | | 🟦 Dense |
| GPT | 2018 | LayerNorm | Serial | ☐ | Absolute | GeLU | | 🟦 Dense |
| T5 (11B) | 2019 | RMSNorm | Serial | ☑ | Relative | ReLU | | 🟦 Dense |
| GPT2 | 2019 | LayerNorm | Serial | ☑ | Absolute | GeLU | | 🟦 Dense |
| T5 (XXL 11B) v1.1 | 2020 | RMSNorm | Serial | ☑ | Relative | GeGLU | | 🟦 Dense |
| mT5 | 2020 | RMSNorm | Serial | ☑ | Relative | GeGLU | | 🟦 Dense |
| GPT3 (175B) | 2020 | LayerNorm | Serial | ☑ | Absolute | GeLU | | 🟦 Dense |
| GPT-J | 2021 | LayerNorm | Parallel | ☑ | RoPE | GeLU | | 🟦 Dense |
| LaMDA | 2021 | | | ☑ | Relative | GeGLU | | 🟦 Dense |
| Anthropic LM (not Claude) | 2021 | | | ☑ | | | | 🟦 Dense |
| Gopher (280B) | 2021 | RMSNorm | Serial | ☑ | Relative | ReLU | | 🟦 Dense |
| GPT-NeoX | 2022 | LayerNorm | Parallel | ☑ | RoPE | GeLU | | 🟦 Dense |
| BLOOM (176B) | 2022 | LayerNorm | Serial | ☑ | ALiBi | GeLU | | 🟦 Dense |
| OPT (175B) | 2022 | LayerNorm | Serial | ☑ | Absolute | ReLU | | 🟦 Dense |
| PaLM (540B) | 2022 | RMSNorm | Parallel | ☑ | RoPE | SwiGLU | Z-loss | 🟦 Dense |
| Chinchilla | 2022 | RMSNorm | Serial | ☑ | Relative | ReLU | | 🟦 Dense |
| Mistral (7B) | 2023 | RMSNorm | Serial | ☑ | RoPE | SwiGLU | | 🟦 Dense |
| LLaMA2 (70B) | 2023 | RMSNorm | Serial | ☑ | RoPE | SwiGLU | | 🟦 Dense |
| LLaMA (65B) | 2023 | RMSNorm | Serial | ☑ | RoPE | SwiGLU | | 🟦 Dense |
| GPT4 | 2023 | | | ☐ | | | | 🟦 Dense (suspected) |
| Qwen 2 | 2024 | RMSNorm | Serial | ☐ | RoPE | SwiGLU | Z-loss, QK-norm | 🟦 Dense |
| Gemma 2 (27B) | 2024 | RMSNorm | Serial | ☑ | RoPE | GeGLU | Logit soft capping, Pre/post norm | 🟦 Dense |
| Nemotron-4 (340B) | 2024 | LayerNorm | Serial | ☑ | RoPE | SwiGLU | | 🟩 MoE |
| Qwen 2 (72B) - same for 2.5 | 2024 | RMSNorm | Serial | ☑ | RoPE | SwiGLU | | 🟦 Dense |
| Falcon 2 11B | 2024 | LayerNorm | Serial | ☑ | RoPE | GeLU | Z-loss | 🟦 Dense |
| Phi3 (small) - same for phi4 | 2024 | RMSNorm | Serial | ☑ | RoPE | GeGLU | | 🟦 Dense |
| Llama 3 (70B) | 2024 | RMSNorm | Serial | ☑ | RoPE | SwiGLU | | 🟦 Dense |
| Reka Flash | 2024 | RMSNorm | Serial | ☑ | RoPE | SwiGLU | | 🟦 Dense |
| Command R+ | 2024 | LayerNorm | Parallel | ☑ | RoPE | SwiGLU | | 🟦 Dense |
| OLMo | 2024 | RMSNorm | Serial | ☑ | RoPE | SwiGLU | | 🟦 Dense |
| Qwen (14B) | 2024 | RMSNorm | Serial | ☑ | RoPE | SwiGLU | | 🟦 Dense |
| DeepSeek (67B) | 2024 | RMSNorm | Serial | ☑ | RoPE | SwiGLU | | 🟩 MoE |
| Yi (34B) | 2024 | RMSNorm | Serial | ☑ | RoPE | SwiGLU | | 🟦 Dense |
| Mistral of Experts | 2024 | | | ☐ | | | | 🟩 MoE |
| Command A | 2024 | LayerNorm | Parallel | ☑ | Hybrid (RoPE+NoPE) | SwiGLU | | 🟩 MoE |
| Gemma 3 | 2024 | RMSNorm | Serial | ☐ | RoPE | GeGLU | Pre/post norm, QK-norm | 🟦 Dense |
| SmolLM2 (1.7B) | 2024 | RMSNorm | Serial | ☑ | RoPE | SwiGLU | | 🟦 Dense |
| Gemini 2.5 | 2025 |  | Serial |  |  |  | “Thinking” reasoning-focused updates from Google DeepMind | 🟦 / 🟩 Dense & MoE|
| ERNIE 4.5 / ERNIE X1 (Baidu) | 2025 |  |  |  |  |  | ERNIE 4.5 family includes **MoE** variants (active-params reported in tech report). | 🟩 MoE |
| Qwen3 | 2025 | RMSNorm | Serial | ☑ | RoPE (ABF-RoPE / long-context RoPE) | SwiGLU | GQA, QK-norm, RoPE extensions | 🟦 / 🟩 Dense & MoE |
| Kimi K2 (Moonshot AI) | 2025 | — | — | — | — | SwiGLU | MuonClip (QK-clip) | 🟩 MoE |
| GLM-4.5 (and GLM-4.5-Air) | 2025 | RMSNorm | Serial | ☑ | Partial RoPE / GQA | SwiGLU | loss-free balance routing, sigmoid gates (MoE routing) | 🟩 MoE |
| Claude Opus 4.1 | 2025 |  |  |  |  |  |  | 🟦 / 🟩 Dense & MoE |
| oss-gpt | 2025 | RMSNorm | Serial | ☑ | RoPE | SwiGLU | Sliding attention, Yarn, SwiGLU limit 7.0 | 🟩 MoE |
| GPT-5 (OpenAI) | 2025 |  | System-of-models (router + reasoning models) |  |  |  | System card: router + thinking/non-thinking variants; multi-size releases (main/mini/nano). | 🟦 / 🟩 Dense & MoE |
---

## Legend

- ☑ = Enabled/True  
- ☐ = Disabled/False  
- 🟩 = MoE (Mixture of Experts)  
- 🟦 = Dense model  

## Column Descriptions

- **AI Model**: Name and parameter count (where available) of the language model  
- **Year**: Year of release or publication  
- **Norm**: Type of normalization used (LayerNorm, RMSNorm)  
- **Parallel Layer**: Whether layers are processed in parallel or serial  
- **Pre-norm**: Whether pre-normalization is applied  
- **Position embedding**: Type of positional encoding (Sine, Absolute, Relative, RoPE, ALiBi, etc.)  
- **Activation**: Activation function used (ReLU, GeLU, GeGLU, SwiGLU)  
- **Stability tricks**: Additional techniques used for training stability  

## Notes

- This table shows the evolution of transformer architectures from 2017 to 2024  
- Recent models (2023-2024) predominantly use RMSNorm, RoPE positional embeddings, and SwiGLU activations  
- Most modern models use pre-normalization for better training stability  
