function includesAny(text, terms) {
  return terms.some((term) => text.includes(term));
}

function projectAnswer(projectName, details) {
  return `${projectName}\n\n${details}`;
}

export function buildNovaFallbackReply(question) {
  const q = (question || '').toLowerCase();

  const asksComplexity = includesAny(q, [
    'complexity',
    'complexities',
    'challenging',
    'hard',
    'difficult',
    'architecture',
    'trade-off',
    'tradeoff',
  ]);

  const asksResearch = includesAny(q, [
    'research',
    'researched',
    'study',
    'evaluated',
    'comparison',
    'approach selection',
    'why this approach',
  ]);

  if (includesAny(q, ['cliniq', 'clinic'])) {
    return projectAnswer(
      'CliniQ: complexity and research summary',
      `1. Problem framing: CliniQ had to optimize queue flow while still prioritizing urgent cases, which is a fairness-vs-urgency challenge.
2. Technical constraints: real-time updates, multi-user consistency, and reliable notifications.
3. Research process: candidate priority strategies were compared to avoid over-prioritizing urgent classes in a way that blocks normal throughput.
4. Implementation: Firebase was used for near real-time queue state sync, with priority logic layered in backend workflows and Twilio for communication events.
5. Validation: tested queue behavior across practical scenarios (urgent spikes, normal load, mixed categories), and iterated UX to reduce operational confusion.
6. Improvements: stronger simulation-based stress tests and policy tuning for different hospital scales.`
    );
  }

  if (includesAny(q, ['saferoute', 'safe route', 'route'])) {
    return projectAnswer(
      'SafeRoute: complexity and research summary',
      `1. Problem framing: safest route is a multi-objective decision, not just shortest path.
2. Technical constraints: sparse/noisy risk signals and balancing safety score against route practicality.
3. Research process: explored weighted scoring models and feature combinations for environmental risk factors.
4. Implementation: route scoring pipeline + comparison interface, with Google Maps integration and iterative model tuning.
5. Validation: calibrated route recommendations by checking score stability and usefulness across scenarios.
6. Improvements: add richer local context signals and adaptive weighting by time/location profile.`
    );
  }

  if (includesAny(q, ['academic setu', 'timetable', 'schedule', 'or-tools', 'ortools'])) {
    return projectAnswer(
      'Academic Setu: complexity and research summary',
      `1. Problem framing: timetable generation is a constraint satisfaction/optimization problem with hard constraints.
2. Technical constraints: faculty overlap, room overlap, slot feasibility, and acceptable generation speed.
3. Research process: compared scheduling formulations and selected a constraint-optimization approach for robust conflict handling.
4. Implementation: modeled constraints in OR-Tools, added conflict checks, and integrated generation flow into Django.
5. Validation: generated timetables were programmatically checked for faculty and room conflicts before acceptance.
6. Improvements: preference-aware soft constraints and more advanced optimization objectives (balanced workload, room utilization).`
    );
  }

  if (includesAny(q, ['fake news', 'fakenews', 'nlp'])) {
    return projectAnswer(
      'Fake News Management System: complexity and research summary',
      `1. Problem framing: text classification quality depends heavily on preprocessing and feature strategy.
2. Technical constraints: data variability, domain shift, and inference-performance trade-offs.
3. Research process: experimented with preprocessing pipelines and model options before selecting practical combinations.
4. Implementation: Flask + ML/NLP prediction pipeline with Streamlit-based verification UI.
5. Validation: iterated on metrics and error cases to improve reliability.
6. Improvements: more robust cross-domain validation and explainability layers for predictions.`
    );
  }

  if (includesAny(q, ['chatbot', 'ai chatbot', 'conversation'])) {
    return projectAnswer(
      'AI Chatbot: complexity and research summary',
      `1. Problem framing: useful conversation needs intent handling and context continuity.
2. Technical constraints: response relevance, latency, and persistent state.
3. Research process: evaluated intent flow patterns and dialog handling choices.
4. Implementation: NLP-based assistant with Firebase persistence for chat history.
5. Validation: tested practical interactions and refined response behavior.
6. Improvements: richer intent taxonomy and response-ranking logic.`
    );
  }

  if (includesAny(q, ['event image finder', 'face', 'facial', 'computer vision'])) {
    return projectAnswer(
      'Event Image Finder: complexity and research summary',
      `1. Problem framing: find relevant user photos in large event datasets.
2. Technical constraints: recognition quality under varied lighting/angles and batch processing speed.
3. Research process: evaluated recognition/retrieval flow trade-offs for precision and usability.
4. Implementation: face-recognition retrieval pipeline + Firebase storage + React gallery workflow.
5. Validation: checked retrieval quality and end-to-end usability from upload to results.
6. Improvements: confidence-based ranking and better duplicate handling.`
    );
  }

  if (asksComplexity || asksResearch) {
    return `Chethan's projects generally follow this depth-oriented engineering pattern:\n\n1. Problem framing: define target impact and hard constraints first.\n2. Research: compare multiple candidate approaches and trade-offs.\n3. Architecture: choose components based on reliability, real-time needs, and iteration speed.\n4. Implementation: build a working baseline, then improve with focused iterations.\n5. Validation: test conflict/error scenarios, not only happy-path behavior.\n6. Improvement roadmap: identify bottlenecks and optimize in next versions.\n\nIf you name a project (CliniQ, SafeRoute, Academic Setu, Fake News, AI Chatbot, Event Image Finder), I can provide a deep project-specific complexity breakdown.`;
  }

  return `I can answer in detail about Chethan's background, skills, and projects, including architecture decisions, implementation complexity, and research process.\n\nTry asking:\n- \"Explain the complexity of Academic Setu in depth\"\n- \"What research was done for SafeRoute?\"\n- \"How was CliniQ architected and validated?\"`;
}
