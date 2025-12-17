/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable eqeqeq */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @rushstack/no-new-null */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import styles from "./QuickLinks.module.scss";
import { useEffect, useState } from "react";
import SPServices from "../../../../CommonServices/SPServices";
import { Config } from "../../../../CommonServices/Config";

const QuickLinks = () => {
  const [quickLinkData, setQuickLinkData] = useState<any>([]);

  //Initial render:
  useEffect(() => {
    getQuickLinksDatas();
  }, []);

  const getQuickLinksDatas = () => {
    SPServices.SPReadItems({
      Listname: Config.ListNames.QuickLinks,
      Select: "*,AttachmentFiles",
      Expand: "AttachmentFiles",
      Orderby: "Modified",
      Orderbydecorasc: true,
      Filter: [
        {
          FilterKey: "IsActive",
          Operator: "eq",
          FilterValue: "1",
        },
      ],
    })
      .then((res) => {
        let tempQuickLinksData: any[] = [];
        res.forEach((items: any) => {
          tempQuickLinksData.push({
            imageUrl: items?.AttachmentFiles[0]?.ServerRelativeUrl,
            name: items?.Title,
            link: items?.Link?.Url,
          });
        });
        setQuickLinkData([...tempQuickLinksData]);
      })
      .catch((err) => {
        console.log(err, "Error getting Quick Links data in QuickLinks.tsx");
      });
  };

  return (
    <div className={styles.QuickLinkSection}>
      <div className={styles.QuickLinkContainer}>
        {quickLinkData.map((items: any) => (
          <div className={styles.QuickLinkBox}>
            <div className={styles.QuickLinkImage}>
              <img
                src={
                  items?.imageUrl
                    ? items?.imageUrl
                    : require("../../../../External/bouncingBlink.gif")
                }
              />
            </div>
            <div className={styles.QuickLinkName}>{items?.name}</div>
          </div>
        ))}

        {/* Duplicate for infinite smooth loop */}
        {quickLinkData.map((items: any) => (
          <div className={styles.QuickLinkBox}>
            <div className={styles.QuickLinkImage}>
              <img
                src={
                  items?.imageUrl
                    ? items?.imageUrl
                    : require("../../../../External/bouncingBlink.gif")
                }
              />
            </div>
            <div className={styles.QuickLinkName}>{items?.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickLinks;
