<style>
.ai-models-table {
    width: 100%;
    table-layout: fixed;
    border-collapse: collapse;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    font-size: 14px;
    margin: 20px 0;
}

.ai-models-table th,
.ai-models-table td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
    vertical-align: top;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    position: relative;
}

.ai-models-table th {
    background-color: #f5f5f5;
    font-weight: 600;
    position: sticky;
    top: 0;
    z-index: 10;
}

.ai-models-table tr:nth-child(even) {
    background-color: #f9f9f9;
}

.ai-models-table tr:hover {
    background-color: #e8f4f8;
}

.ai-models-table td:hover {
    white-space: normal;
    word-wrap: break-word;
    overflow: visible;
    background-color: #fff;
    box-shadow: 0 2px 8px rgba(0,0,0,0.15);
    z-index: 5;
    position: relative;
}

/* Column width distribution */
.ai-models-table th:nth-child(1), .ai-models-table td:nth-child(1) { width: 22%; } /* AI Model */
.ai-models-table th:nth-child(2), .ai-models-table td:nth-child(2) { width: 6%; }  /* Year */
.ai-models-table th:nth-child(3), .ai-models-table td:nth-child(3) { width: 10%; } /* Norm */
.ai-models-table th:nth-child(4), .ai-models-table td:nth-child(4) { width: 12%; } /* Parallel Layer */
.ai-models-table th:nth-child(5), .ai-models-table td:nth-child(5) { width: 8%; }  /* Pre-norm */
.ai-models-table th:nth-child(6), .ai-models-table td:nth-child(6) { width: 14%; } /* Position embedding */
.ai-models-table th:nth-child(7), .ai-models-table td:nth-child(7) { width: 10%; } /* Activation */
.ai-models-table th:nth-child(8), .ai-models-table td:nth-child(8) { width: 18%; } /* Stability tricks */
.ai-models-table th:nth-child(9), .ai-models-table td:nth-child(9) { width: 10%; } /* MoE/Dense */
</style>

# AI Models Comparison Table

This table provides a comprehensive comparison of various AI language models and their architectural characteristics.

<table class="ai-models-table">
<thead>
<tr>
<th>AI Model</th>
<th>Year</th>
<th>Norm</th>
<th>Parallel Layer</th>
<th>Pre-norm</th>
<th>Position embedding</th>
<th>Activation</th>
<th>Stability tricks</th>
<th>MoE/Dense</th>
</tr>
</thead>
<tbody>
<tr><td>Original transformer</td><td>2017</td><td>LayerNorm</td><td>Serial</td><td>☐</td><td>Sine</td><td>ReLU</td><td></td><td>🟦 Dense</td></tr>
<tr><td>GPT</td><td>2018</td><td>LayerNorm</td><td>Serial</td><td>☐</td><td>Absolute</td><td>GeLU</td><td></td><td>🟦 Dense</td></tr>
<tr><td>T5 (11B)</td><td>2019</td><td>RMSNorm</td><td>Serial</td><td>☑</td><td>Relative</td><td>ReLU</td><td></td><td>🟦 Dense</td></tr>
<tr><td>GPT2</td><td>2019</td><td>LayerNorm</td><td>Serial</td><td>☑</td><td>Absolute</td><td>GeLU</td><td></td><td>🟦 Dense</td></tr>
<tr><td>T5 (XXL 11B) v1.1</td><td>2020</td><td>RMSNorm</td><td>Serial</td><td>☑</td><td>Relative</td><td>GeGLU</td><td></td><td>🟦 Dense</td></tr>
<tr><td>mT5</td><td>2020</td><td>RMSNorm</td><td>Serial</td><td>☑</td><td>Relative</td><td>GeGLU</td><td></td><td>🟦 Dense</td></tr>
<tr><td>GPT3 (175B)</td><td>2020</td><td>LayerNorm</td><td>Serial</td><td>☑</td><td>Absolute</td><td>GeLU</td><td></td><td>🟦 Dense</td></tr>
<tr><td>GPT-J</td><td>2021</td><td>LayerNorm</td><td>Parallel</td><td>☑</td><td>RoPE</td><td>GeLU</td><td></td><td>🟦 Dense</td></tr>
<tr><td>LaMDA</td><td>2021</td><td></td><td></td><td>☑</td><td>Relative</td><td>GeGLU</td><td></td><td>🟦 Dense</td></tr>
<tr><td>Anthropic LM (not Claude)</td><td>2021</td><td></td><td></td><td>☑</td><td></td><td></td><td></td><td>🟦 Dense</td></tr>
<tr><td>Gopher (280B)</td><td>2021</td><td>RMSNorm</td><td>Serial</td><td>☑</td><td>Relative</td><td>ReLU</td><td></td><td>🟦 Dense</td></tr>
<tr><td>GPT-NeoX</td><td>2022</td><td>LayerNorm</td><td>Parallel</td><td>☑</td><td>RoPE</td><td>GeLU</td><td></td><td>🟦 Dense</td></tr>
<tr><td>BLOOM (176B)</td><td>2022</td><td>LayerNorm</td><td>Serial</td><td>☑</td><td>ALiBi</td><td>GeLU</td><td></td><td>🟦 Dense</td></tr>
<tr><td>OPT (175B)</td><td>2022</td><td>LayerNorm</td><td>Serial</td><td>☑</td><td>Absolute</td><td>ReLU</td><td></td><td>🟦 Dense</td></tr>
<tr><td>PaLM (540B)</td><td>2022</td><td>RMSNorm</td><td>Parallel</td><td>☑</td><td>RoPE</td><td>SwiGLU</td><td>Z-loss</td><td>🟦 Dense</td></tr>
<tr><td>Chinchilla</td><td>2022</td><td>RMSNorm</td><td>Serial</td><td>☑</td><td>Relative</td><td>ReLU</td><td></td><td>🟦 Dense</td></tr>
<tr><td>Mistral (7B)</td><td>2023</td><td>RMSNorm</td><td>Serial</td><td>☑</td><td>RoPE</td><td>SwiGLU</td><td></td><td>🟦 Dense</td></tr>
<tr><td>LLaMA2 (70B)</td><td>2023</td><td>RMSNorm</td><td>Serial</td><td>☑</td><td>RoPE</td><td>SwiGLU</td><td></td><td>🟦 Dense</td></tr>
<tr><td>LLaMA (65B)</td><td>2023</td><td>RMSNorm</td><td>Serial</td><td>☑</td><td>RoPE</td><td>SwiGLU</td><td></td><td>🟦 Dense</td></tr>
<tr><td>GPT4</td><td>2023</td><td></td><td></td><td>☐</td><td></td><td></td><td></td><td>🟦 Dense (suspected)</td></tr>
<tr><td>Qwen 2</td><td>2024</td><td>RMSNorm</td><td>Serial</td><td>☐</td><td>RoPE</td><td>SwiGLU</td><td>Z-loss, QK-norm</td><td>🟦 Dense</td></tr>
<tr><td>Gemma 2 (27B)</td><td>2024</td><td>RMSNorm</td><td>Serial</td><td>☑</td><td>RoPE</td><td>GeGLU</td><td>Logit soft capping, Pre/post norm</td><td>🟦 Dense</td></tr>
<tr><td>Nemotron-4 (340B)</td><td>2024</td><td>LayerNorm</td><td>Serial</td><td>☑</td><td>RoPE</td><td>SwiGLU</td><td></td><td>🟩 MoE</td></tr>
<tr><td>Qwen 2 (72B) - same for 2.5</td><td>2024</td><td>RMSNorm</td><td>Serial</td><td>☑</td><td>RoPE</td><td>SwiGLU</td><td></td><td>🟦 Dense</td></tr>
<tr><td>Falcon 2 11B</td><td>2024</td><td>LayerNorm</td><td>Serial</td><td>☑</td><td>RoPE</td><td>GeLU</td><td>Z-loss</td><td>🟦 Dense</td></tr>
<tr><td>Phi3 (small) - same for phi4</td><td>2024</td><td>RMSNorm</td><td>Serial</td><td>☑</td><td>RoPE</td><td>GeGLU</td><td></td><td>🟦 Dense</td></tr>
<tr><td>Llama 3 (70B)</td><td>2024</td><td>RMSNorm</td><td>Serial</td><td>☑</td><td>RoPE</td><td>SwiGLU</td><td></td><td>🟦 Dense</td></tr>
<tr><td>Reka Flash</td><td>2024</td><td>RMSNorm</td><td>Serial</td><td>☑</td><td>RoPE</td><td>SwiGLU</td><td></td><td>🟦 Dense</td></tr>
<tr><td>Command R+</td><td>2024</td><td>LayerNorm</td><td>Parallel</td><td>☑</td><td>RoPE</td><td>SwiGLU</td><td></td><td>🟦 Dense</td></tr>
<tr><td>OLMo</td><td>2024</td><td>RMSNorm</td><td>Serial</td><td>☑</td><td>RoPE</td><td>SwiGLU</td><td></td><td>🟦 Dense</td></tr>
<tr><td>Qwen (14B)</td><td>2024</td><td>RMSNorm</td><td>Serial</td><td>☑</td><td>RoPE</td><td>SwiGLU</td><td></td><td>🟦 Dense</td></tr>
<tr><td>DeepSeek (67B)</td><td>2024</td><td>RMSNorm</td><td>Serial</td><td>☑</td><td>RoPE</td><td>SwiGLU</td><td></td><td>🟩 MoE</td></tr>
<tr><td>Yi (34B)</td><td>2024</td><td>RMSNorm</td><td>Serial</td><td>☑</td><td>RoPE</td><td>SwiGLU</td><td></td><td>🟦 Dense</td></tr>
<tr><td>Mistral of Experts</td><td>2024</td><td></td><td></td><td>☐</td><td></td><td></td><td></td><td>🟩 MoE</td></tr>
<tr><td>Command A</td><td>2024</td><td>LayerNorm</td><td>Parallel</td><td>☑</td><td>Hybrid (RoPE+NoPE)</td><td>SwiGLU</td><td></td><td>🟩 MoE</td></tr>
<tr><td>Gemma 3</td><td>2024</td><td>RMSNorm</td><td>Serial</td><td>☐</td><td>RoPE</td><td>GeGLU</td><td>Pre/post norm, QK-norm</td><td>🟦 Dense</td></tr>
<tr><td>SmolLM2 (1.7B)</td><td>2024</td><td>RMSNorm</td><td>Serial</td><td>☑</td><td>RoPE</td><td>SwiGLU</td><td></td><td>🟦 Dense</td></tr>
<tr><td>Gemini 2.5</td><td>2025</td><td></td><td>Serial</td><td></td><td></td><td></td><td>"Thinking" reasoning-focused updates from Google DeepMind</td><td>🟦 / 🟩 Dense & MoE</td></tr>
<tr><td>ERNIE 4.5 / ERNIE X1 (Baidu)</td><td>2025</td><td></td><td></td><td></td><td></td><td></td><td>ERNIE 4.5 family includes **MoE** variants (active-params reported in tech report).</td><td>🟩 MoE</td></tr>
<tr><td>Qwen3</td><td>2025</td><td>RMSNorm</td><td>Serial</td><td>☑</td><td>RoPE (ABF-RoPE / long-context RoPE)</td><td>SwiGLU</td><td>GQA, QK-norm, RoPE extensions</td><td>🟦 / 🟩 Dense & MoE</td></tr>
<tr><td>Kimi K2 (Moonshot AI)</td><td>2025</td><td>—</td><td>—</td><td>—</td><td>—</td><td>SwiGLU</td><td>MuonClip (QK-clip)</td><td>🟩 MoE</td></tr>
<tr><td>GLM-4.5 (and GLM-4.5-Air)</td><td>2025</td><td>RMSNorm</td><td>Serial</td><td>☑</td><td>Partial RoPE / GQA</td><td>SwiGLU</td><td>loss-free balance routing, sigmoid gates (MoE routing)</td><td>🟩 MoE</td></tr>
<tr><td>Claude Opus 4.1</td><td>2025</td><td></td><td></td><td></td><td></td><td></td><td></td><td>🟦 / 🟩 Dense & MoE</td></tr>
<tr><td>oss-gpt</td><td>2025</td><td>RMSNorm</td><td>Serial</td><td>☑</td><td>RoPE</td><td>SwiGLU</td><td>Sliding attention, Yarn, SwiGLU limit 7.0</td><td>🟩 MoE</td></tr>
<tr><td>GPT-5 (OpenAI)</td><td>2025</td><td></td><td>System-of-models (router + reasoning models)</td><td></td><td></td><td></td><td>System card: router + thinking/non-thinking variants; multi-size releases (main/mini/nano).</td><td>🟦 / 🟩 Dense & MoE</td></tr>
</tbody>
</table>

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
