'use client';

import { useState } from 'react';
import { IconThumbDown, IconThumbUp } from '@tabler/icons-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Paragraph } from '@/components/ui/paragraph';
import { Textarea } from '@/components/ui/textarea';
import { useTrackEvent } from '@/hooks/use-track-event';
import { cn } from '@/lib/utils';
import { useScopedI18n } from '@/locales/client';

export const UserFeedback = ({ className }: { className?: string }) => {
  const t = useScopedI18n('UserFeedback');
  const [feedbackState, setFeedbackState] = useState<
    'default' | 'form' | 'finish'
  >('default');
  const [feedbackMessage, setFeedbackMessage] = useState<string>('');

  const trackEvent = useTrackEvent('user-feedback');

  const handleLike = () => {
    setFeedbackState('form');

    trackEvent({ value: 'like', url: location.href });
  };

  const handleDislike = () => {
    setFeedbackState('form');

    trackEvent({ value: 'dislike', url: location.href });
  };

  const handleFormSend = () => {
    setFeedbackState('finish');

    trackEvent({ message: feedbackMessage, url: location.href });
  };

  return (
    <Card className={cn('pt-4', className)}>
      {feedbackState === 'default' ? (
        <CardContent className="px-6 pb-4 pt-0 flex justify-between items-center">
          <Paragraph className="m-0">{t('question')}</Paragraph>
          <div>
            <Button
              className="mr-2"
              aria-label={t('like')}
              onClick={handleLike}
              variant="ghost"
              size="icon"
            >
              <IconThumbUp stroke={1.5} />
            </Button>
            <Button
              aria-label={t('dislike')}
              onClick={handleDislike}
              variant="ghost"
              size="icon"
            >
              <IconThumbDown stroke={1.5} />
            </Button>
          </div>
        </CardContent>
      ) : null}
      {feedbackState === 'form' ? (
        <CardContent className="px-6 pb-4 pt-0">
          <Textarea
            placeholder={t('formQuestion')}
            className="mb-2 resize-none"
            value={feedbackMessage}
            onChange={(event) => setFeedbackMessage(event.target.value)}
          />
          <Button
            onClick={handleFormSend}
            variant="default"
            size="sm"
            disabled={feedbackMessage.length === 0}
          >
            {t('send')}
          </Button>
        </CardContent>
      ) : null}
      {feedbackState === 'finish' ? (
        <CardContent className="px-6 pb-4 pt-0">
          <Paragraph className="m-0">{t('gratitude')}</Paragraph>
        </CardContent>
      ) : null}
    </Card>
  );
};
