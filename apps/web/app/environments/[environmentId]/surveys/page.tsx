import ContentWrapper from "@/components/shared/ContentWrapper";
import WidgetStatusIndicator from "@/components/shared/WidgetStatusIndicator";
import SurveysList from "./SurveyList";
import { getProductByEnvironmentId } from "@formbricks/lib/services/product";
import { getEnvironment } from "@formbricks/lib/services/environment";
import { getSurveysWithResponseCount } from "@formbricks/lib/services/survey";
import { createSurveyAction, deleteSurveyAction } from "@/app/environments/[environmentId]/actions";

export default async function SurveysPage({ params }) {
  const environmentId = params.environmentId;
  const product = await getProductByEnvironmentId(environmentId);
  const environment = await getEnvironment(environmentId);
  const surveys = await getSurveysWithResponseCount(environmentId);

  return (
    <ContentWrapper className="flex h-full flex-col justify-between">
      <SurveysList
        environmentId={params.environmentId}
        product={product}
        environment={environment}
        surveys={surveys}
        createSurveyAction={createSurveyAction}
        deleteSurveyAction={deleteSurveyAction}
      />
      <WidgetStatusIndicator environmentId={params.environmentId} type="mini" />
    </ContentWrapper>
  );
}
