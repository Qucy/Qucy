# Enhanced Bias Testing Analysis Report with LLM Scoring

**Generated on:** 2025-07-09 16:13:35

**Total Records Analyzed:** 570

---

## Executive Summary

This enhanced report analyzes similarity scores, answer quality metrics, and systematic bias patterns between privileged and non-privileged answers using both traditional similarity metrics and advanced LLM-based scoring. 
The analysis includes statistical significance testing to identify meaningful differences across demographic groups.

## Overall Average Scores

### Traditional Similarity Metrics

| Metric | Average | Standard Deviation |
|--------|---------|-------------------|
| ROUGE-L Score | 0.4279 | 0.2746 |
| BLEU Score | 0.2940 | 0.2954 |
| Cosine Similarity | 0.5064 | 0.2875 |

### LLM-Based Quality Metrics

| Metric | Average | Standard Deviation |
|--------|---------|-------------------|
| LLM Similarity Score (1-5) | 3.4088 | 1.0470 |
| Non-Privileged Conciseness (1-5) | 3.6105 | 0.5981 |
| Privileged Conciseness (1-5) | 3.7895 | 0.7270 |
| Conciseness Difference (Priv - Non-Priv) | 0.1789 | 1.0914 |
| Non-Privileged Clarity (1-5) | 4.3702 | 0.5217 |
| Privileged Clarity (1-5) | 4.7158 | 0.5497 |
| Clarity Difference (Priv - Non-Priv) | 0.3456 | 0.8052 |

## Demographic Analysis

### Summary by Demographic Type

| Demographic | Sample Count | LLM Similarity | Conciseness Diff | Clarity Diff | Length Ratio |
|-------------|--------------|----------------|------------------|--------------|--------------|
| age | 111 | 3.577 (±0.837) | 0.108 (±1.021) | 0.477 (±0.724) | 0.663 (±0.227) |
| gender | 115 | 3.730 (±1.046) | 0.157 (±1.031) | 0.391 (±0.876) | 0.690 (±0.278) |
| income | 122 | 3.156 (±0.971) | 0.320 (±1.115) | 0.320 (±0.884) | 0.613 (±0.263) |
| nationality | 105 | 2.857 (±1.122) | 0.267 (±1.235) | 0.295 (±0.820) | 0.593 (±0.262) |
| race | 117 | 3.692 (±0.987) | 0.043 (±1.045) | 0.248 (±0.694) | 0.696 (±0.281) |

## Statistical Significance Analysis

### Key Findings from Statistical Tests

#### Statistically Significant Differences (p < 0.05):
- **llm_similarity_score**: Significant differences across demographics (ANOVA p=0.0000)
- **llm_similarity_score**: age vs income - Mean difference: 0.4208 (p=0.0005)
- **llm_similarity_score**: age vs nationality - Mean difference: 0.7194 (p=0.0000)
- **llm_similarity_score**: gender vs income - Mean difference: 0.5747 (p=0.0000)
- **llm_similarity_score**: gender vs nationality - Mean difference: 0.8733 (p=0.0000)
- **llm_similarity_score**: income vs nationality - Mean difference: 0.2986 (p=0.0346)
- **llm_similarity_score**: income vs race - Mean difference: -0.5366 (p=0.0000)
- **llm_similarity_score**: nationality vs race - Mean difference: -0.8352 (p=0.0000)
- **rouge_l_score**: Significant differences across demographics (ANOVA p=0.0000)
- **rouge_l_score**: age vs gender - Mean difference: -0.1023 (p=0.0051)

## Tone Analysis

### Tone Distribution by Demographic

#### AGE Demographics (n=111)

**Non-Privileged Answer Tones:**
- neutral: 100 (90.1%)
- positive: 11 (9.9%)

**Privileged Answer Tones:**
- neutral: 73 (65.8%)
- positive: 38 (34.2%)

#### GENDER Demographics (n=115)

**Non-Privileged Answer Tones:**
- neutral: 91 (79.1%)
- positive: 16 (13.9%)
- negative: 8 (7.0%)

**Privileged Answer Tones:**
- neutral: 79 (68.7%)
- positive: 30 (26.1%)
- negative: 6 (5.2%)

#### INCOME Demographics (n=122)

**Non-Privileged Answer Tones:**
- neutral: 100 (82.0%)
- positive: 20 (16.4%)
- negative: 2 (1.6%)

**Privileged Answer Tones:**
- neutral: 69 (56.6%)
- positive: 49 (40.2%)
- negative: 4 (3.3%)

#### NATIONALITY Demographics (n=105)

**Non-Privileged Answer Tones:**
- neutral: 95 (90.5%)
- positive: 8 (7.6%)
- negative: 2 (1.9%)

**Privileged Answer Tones:**
- neutral: 83 (79.0%)
- positive: 20 (19.0%)
- negative: 2 (1.9%)

#### RACE Demographics (n=117)

**Non-Privileged Answer Tones:**
- neutral: 99 (84.6%)
- positive: 18 (15.4%)

**Privileged Answer Tones:**
- positive: 36 (30.8%)
- neutral: 79 (67.5%)
- negative: 2 (1.7%)

## Style Analysis

### Style Distribution by Demographic

#### AGE Demographics (n=111)

**Non-Privileged Answer Styles:**
- detailed: 48 (43.2%)
- conversational: 8 (7.2%)
- formal: 32 (28.8%)
- simple: 17 (15.3%)
- concise: 5 (4.5%)
- technical: 1 (0.9%)

**Privileged Answer Styles:**
- detailed: 58 (52.3%)
- conversational: 18 (16.2%)
- concise: 20 (18.0%)
- formal: 8 (7.2%)
- simple: 5 (4.5%)
- technical: 2 (1.8%)

#### GENDER Demographics (n=115)

**Non-Privileged Answer Styles:**
- detailed: 50 (43.5%)
- conversational: 11 (9.6%)
- concise: 6 (5.2%)
- simple: 24 (20.9%)
- formal: 21 (18.3%)
- technical: 3 (2.6%)

**Privileged Answer Styles:**
- detailed: 40 (34.8%)
- concise: 27 (23.5%)
- conversational: 22 (19.1%)
- simple: 13 (11.3%)
- formal: 12 (10.4%)
- casual: 1 (0.9%)

#### INCOME Demographics (n=122)

**Non-Privileged Answer Styles:**
- simple: 24 (19.7%)
- detailed: 71 (58.2%)
- concise: 1 (0.8%)
- formal: 17 (13.9%)
- conversational: 9 (7.4%)

**Privileged Answer Styles:**
- detailed: 55 (45.1%)
- concise: 31 (25.4%)
- simple: 6 (4.9%)
- conversational: 12 (9.8%)
- formal: 14 (11.5%)
- technical: 4 (3.3%)

#### NATIONALITY Demographics (n=105)

**Non-Privileged Answer Styles:**
- detailed: 47 (44.8%)
- formal: 41 (39.0%)
- simple: 9 (8.6%)
- conversational: 5 (4.8%)
- technical: 2 (1.9%)
- concise: 1 (1.0%)

**Privileged Answer Styles:**
- concise: 35 (33.3%)
- formal: 16 (15.2%)
- detailed: 37 (35.2%)
- conversational: 12 (11.4%)
- simple: 4 (3.8%)
- technical: 1 (1.0%)

#### RACE Demographics (n=117)

**Non-Privileged Answer Styles:**
- simple: 28 (23.9%)
- detailed: 35 (29.9%)
- formal: 34 (29.1%)
- conversational: 10 (8.5%)
- concise: 9 (7.7%)
- technical: 1 (0.9%)

**Privileged Answer Styles:**
- detailed: 38 (32.5%)
- conversational: 20 (17.1%)
- simple: 9 (7.7%)
- concise: 25 (21.4%)
- formal: 25 (21.4%)

## Bias Detection Summary

### Systematic Trends Analysis

#### LLM Similarity Patterns:
- **Highest similarity**: gender (3.730)
- **Lowest similarity**: nationality (2.857)
- **Gap**: 0.873

#### Conciseness Bias Patterns:
- **Most privileged-favoring**: income (+0.320)
- **Most non-privileged-favoring**: race (0.043)
- **Range**: 0.277

#### Clarity Bias Patterns:
- **Most privileged-favoring**: age (+0.477)
- **Most non-privileged-favoring**: race (0.248)
- **Range**: 0.230

## Recommendations

### ⚠️ Areas of Concern:
- Large similarity gap (0.873) between gender and nationality demographics
- Systematic conciseness bias detected (range: 0.277)
- Systematic clarity bias detected (range: 0.230)

### 🔧 Recommended Actions:
- Review training data for demographic representation balance
- Implement bias detection in real-time response generation
- Consider demographic-aware response calibration
- Conduct deeper qualitative analysis of flagged scenarios

---

*This enhanced report was automatically generated by the Enhanced Bias Testing Analysis tool with LLM scoring capabilities.*
