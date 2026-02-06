
import React from 'react';

export interface NavItem {
  label: string;
  path: string;
}

export interface ServiceDetail {
  title: string;
  description: string;
  icon: React.ReactNode;
  category: 'Training' | 'Consultancy' | 'Certification';
}

/**
 * Interface representing a message in the chat history.
 * Used by SmartAssistant component and geminiService.
 */
export interface Message {
  role: 'user' | 'assistant';
  content: string;
}
