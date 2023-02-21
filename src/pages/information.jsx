import {
  Flex,
  useTheme,
  View,
  Expander,
  ExpanderItem,
} from "@aws-amplify/ui-react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Head from 'next/head'

export default function Information() {
  const { tokens } = useTheme();

  return (
    <View backgroundColor={tokens.colors.background.secondary}>
      <Navbar />
      <Flex
        direction="column"
        padding={{ base: "2rem 0rem", large: "2rem 4rem" }}
        gap="0"
        color={tokens.colors.font.primary}
        marginLeft="auto"
        marginRight="auto"
        maxWidth={"80vw"}
        paddingTop="10rem"
      >
        <h1 className="information-h1">
          In-Depth Research into Cancer and its Types
        </h1>

        <Expander type="multiple">
          <ExpanderItem title={"Skin Cancer"} value="skin-cancer">
            <p>
              Skin cancer involves the abnormal growth of skin cells, typically
              developing on the skin exposed to the sun. However, it can also
              occur on areas of the skin not exposed to sunlight. There are
              three primary types of skin cancer—Basal Cell Carcinoma, Squamous
              Cell Carcinoma and Melanoma.
            </p>
            <h4>Basal Cell Carcinoma</h4>
            <p>
              Basal cell carcinoma begins in the basal cells which are the skin
              cells that replace old cells in the lower part of the epidermis.
              This appears on the surface of the skin. It usually does not
              spread to other parts of the body, but in the rare instance that
              it does, it can be life threatening. 80% of all skin cancers are
              basal cell cancers.
            </p>
            <h4>Squamous Cell Cancer</h4>
            <p>
              Squamous cell cancer affects the cells on the outermost part of
              the epidermis. Squamous cells can also be found in certain areas
              such as mucous membranes or the lungs. When it forms on the skin,
              it is known as cutaneous squamous cell cancer. It is typically
              found on areas of the body exposed to UV (ultraviolet) sunlight.
              It is treatable, but can become fatal without it. It is the second
              most common type of skin cancer, mostly occurring in the head or
              neck region.
            </p>
            <h4>Melanoma</h4>
            <p>
              Melanoma accounts for 1% of all skin cancers, and develops from
              cells that give your skin colour. Skin colour is caused by a
              pigment known as melanin. The cells that give skin colour are
              known as melanocytes, and it can form noncancerous or cancerous
              moles. They can develop anywhere in the body, but are most common
              on the chest and back in men and legs in women. If caught early,
              they can be treated relatively easily, but since they are more
              likely to spread compared to basal and squamous skin cancers, they
              can become harder to threat if spread.
            </p>
            <h4>Merkel cell skin cancer</h4>
            <p>
              Merkel cell skin cancer is a rarer form of skin cancer caused by
              an overgrowth of Merkel cells—a specialised cell found in the
              epidermis.
            </p>
          </ExpanderItem>

          <ExpanderItem title={"Lung Cancer"} value="lung-cancer">
            <p>
              Lung cancer is a type of cancer that starts in the lungs, where
              uncontrolled cell growth in the tissues of the lung create
              malignant lung tumors. They derive from transformed malignant
              cells that originate as epithelial cells or from tissues composed
              of the same. Certain other lung cancers are generated by the
              malignant transformation of connective tissue. Uncontrolled cell
              growth in the lungs can metastasize, spreading beyond the lung,
              entering the lymphatic circulation or via bloodborne spread into
              distant or nearby parts of the body. The two main types of lung
              cancer are small-cel lung carcinoma (SCLC) and non-small-cell lung
              carcinoma (NSCLC).
            </p>
            <h4>Non-small-cell lung cancer</h4>
            <p>
              80-85% of lung cancers are NSCLC; their subtypes include
              adenocarcinoma, squamous cell carcinoma, and large cell carcinoma.
              Adenocarcinomas start in cells that secrete substances such as
              mucus, and typically occur in people that do or did smoke, but it
              is also common among non-smokers. It is also more common in women
              than men, and is typically found on the outer parts of the lung
              and is thus detected easily. Squamous cell carcinomas start in
              flat cells that line the inside of the airways in the lungs called
              squamous cells, and are typically found near the bronchus. Large
              cell sarcoma can occur anywhere in the lung and grows very
              quickly.
            </p>
            <h4>Small cell lung cancer (SCLC)</h4>
            <p>
              10-15% of lung cancers are SCLC and it is also called oat cell
              cancer. It tends to spread faster than NSCLC; studies have shown
              that 70% of people with SCLC have cancer that has already spread
              by the time it has diagnosed. Treatment for this subtype can
              involve chemotherapy or radiotherapy, but has a higher chance of
              reoccurring.
            </p>
          </ExpanderItem>

          <ExpanderItem title={"Prostate Cancer"} value="prostate-cancer">
            <p>
              The prostate is a part of the male reproductive system, along with
              two seminal vesicles, glands that are attached to each side of the
              prostate. It is the second most common cancer globally, and the
              fifth leading cause of cancer related death in men. Typically, age
              is a risk factor associated with prostate cancer, along with
              obesity. Almost all prostate cancers are adenocarcinomas—they
              develop from the gland cells. In some cases, prostate cancers grow
              and spread quickly, but in some, it remains unnoticed for a long
              time.
            </p>
          </ExpanderItem>

          <ExpanderItem title={"Breast Cancer"} value="breast-cancer">
            <p>
              Breast cancer refers to cancers occurring in the breast tissues,
              developed due to uncontrolled division of different cells of the
              breast. These cells divide more rapidly than healthy cells and
              continue to accumulate, forming a lump or mass. Bangalore is known
              to be the breast cancer capital of India. After skin cancer, it is
              one of the most common types of cancers in women. Studies show
              that early breast cancer treatment has better outcome and
              prognosis; while rates have declined around the world, breast
              cancer screening (conducted by Cytecare Cancer Hospitals) can be
              beneficial.
            </p>
          </ExpanderItem>

          <ExpanderItem title={"Brain Cancer"} value="brain-cancer">
            <p>
              Brain cancer involves the abnormal growth of cancer cells in the
              brain. There are different types of brain tumours; some are benign
              and some are malignant. They can either form in the brain (primary
              brain tumours) or in other parts of the body and then spread to
              the brain (metastatic tumours.) There are a multitude of types of
              brain tumours, including acoustic neurona (non-cancerous),
              astrocytoma (forms in the spinal cord, and can often result in
              seizures), glioblastoma (one of the most aggressive types, and is
              very difficult to cure), and ependydoma which begins in the cells
              which line the passageways of cerebrospinal fluid. Symptoms of
              brain cancer include blurred vision, unexplained nausea, severe
              headaches, difficult following commands or making decisions, and
              seizures.{" "}
            </p>
          </ExpanderItem>

          <ExpanderItem
            title={"Kidney/Renal Cancer"}
            value="kidney-renal-cancer"
          >
            <p>
              Kidney cancer is one that is initially slow to develop and is
              rarely discovered in the early stages. The most prominent form of
              kidney cancer is renal cell carcinoma, and usually involves the
              symptoms of blood in urine, pain in the side that does not recede,
              loss of appetite, unexplained weight loss and prolonged tiredness.
              The cause of kidney cancer remains unknown, but risk factors
              include old age, smoking, obesity, high blood pressure and a
              family history of kidney cancer.
            </p>
          </ExpanderItem>

          <ExpanderItem title={"Bladder Cancer"} value="bladder-cancer">
            <p>
              The bladder is a hollow muscular organ in the lower abdomen that
              stores urine. Bladder cancer can begin in the urothelial cells
              (those that line the inside of the urinary tract.) Symptoms
              include painful urination, blood in urine (hematuria), frequent
              urination and back pain.{" "}
            </p>
          </ExpanderItem>

          <ExpanderItem title={"Thyroid Cancer"} value="thyroid-cancer">
            <p>
              Thryoid cancer involves the growth of cells that starts in the
              thyroid—a gland located at the base of the neck, just below the
              Adam&apos;s apple. The thyroid produces hormones that regulate
              various factors such as blood pressure. There are various types of
              thyroid cancer, and its symptoms typically include a lump that can
              be felt through the skin, increasing hoarseness of the voice,
              difficulty swallowing, and pain in the neck/throat region. It
              typically occurs more in women than men, but can also occur due to
              high levels of radiation and inheritance.
            </p>
          </ExpanderItem>

          <ExpanderItem title={"Endometrial Cancer"} value="endometrial-cancer">
            <p>
              Endometrial cancer refers to cancer occurring in the uterus, where
              fetal development occurs. It begins in the endometrium or the
              lining of the uterus. It often produces abnormal vaginal bleeding
              and pelvic pain and thus can be detected early, and treated by
              surgically removing the uterus.
            </p>
          </ExpanderItem>

          <ExpanderItem
            title={"Pancreatic Cancer"}
            value="pancreatic-exocrine-cancer"
          >
            <p>
              Pancreatic cancer occurs in the pancreas—an organ that lies behind
              the stomach. It releases enzymes that aid digestion and also helps
              manage blood sugar levels through insulin production. The most
              common type of pancreatic cancer is pancreatic ductal
              adenocarcinoma. Pancreatic cancer tends to be dangerous because it
              is difficult to detect it in the early stages as symptoms are only
              observed when it spreads to other organs. These include abdomenal
              pain, blood clots, fatigue, itchy skin, dark coloured urine and
              yellowing of the eyes.
            </p>
          </ExpanderItem>

          <ExpanderItem title={"Leukaemia"} value="leukemic-cancer">
            <p>
              Leukaemia is the cancer of blood-forming tissues—the bone marrow
              and the lymphatic system. There are many types of leukaemia, but
              they involve the abnormal cell division of white blood cells which
              do not function properly. Symptoms can vary, but they include
              frequent nosebleeds, swollen lymph nodes, an enlarged
              liver/spleen, persistent fatigue, red spots on the skin, excessive
              sweating and bone pain/tenderness. Due to the ambiguity of its
              symptoms, leukaemia is often undetected at early stages.
            </p>
          </ExpanderItem>
        </Expander>
      </Flex>
      <Footer />
    </View>
  );
}
